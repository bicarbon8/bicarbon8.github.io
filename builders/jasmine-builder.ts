import * as process from 'process';
import * as path from 'path';
import * as cp from 'child_process';
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { buildEsbuildBrowser } from '@angular-devkit/build-angular/src/builders/browser-esbuild';
import { OutputHashing } from '@angular-devkit/build-angular';
import FastGlob from 'fast-glob';

// Custom builder options interface
interface JasmineBuilderOptions extends JsonObject {
    testFiles: Array<string>; // The paths to spec files to run
    polyfills: Array<string>; // The additional resources reqired for testing
    configFilePaths: Array<string>; // The paths to your `jasmine-browser.json` files
    testOut: string; // The output path for transpiling
}

/** Safely resolves the given Node module string. */
async function resolveModule(module: string) {
    try {
        const modulesDir = path.resolve(process.cwd(), 'node_modules', module);
        return require.resolve(modulesDir);
    } catch(e) {
        console.warn(`module not found: ${module}`);
        return undefined;
    }
}

async function build(context: BuilderContext, options): Promise<BuilderOutput> {
    try {
        let success = true;
        for await (let result of buildEsbuildBrowser(options, context)) { 
            success = success && result.success;
        };
        return { success };
    } catch (err) {
        return { success: false, error: err.message };
    }
}

async function wait(duration: number): Promise<void> {
    return await new Promise(resolve => setTimeout(resolve, duration));
}

async function test(configFile: string, jbr: string, context: BuilderContext): Promise<number> {
    let exitCode: number;
    const jbrProc = cp.execFile(process.execPath, [
        jbr,
        // 'serve', // use this command to keep the test session open (doesn't open browser automatically)
        'runSpecs', // use this command to open the browser, run the tests and close the browser
        `--config=${configFile}`
    ]);
    // Stream test output to the terminal.
    jbrProc.stdout?.on('data', (chunk) => {
        context.logger.info(chunk);
    });
    jbrProc.stderr?.on('data', (chunk) => {
        // Write to stderr directly instead of `context.logger.error(chunk)`
        process.stderr.write(chunk);
    });
    jbrProc.on('exit', (code: number, signal: NodeJS.Signals) => {
        exitCode = code;
    });
    try {
        while (exitCode === null || exitCode === undefined) {
            await wait(1000);
        }
    } catch (error) {
        return 1;
    }
    return exitCode;
}

/**
 * Finds all test files in the project.
 *
 * @param workspaceRoot The path to the root directory of the workspace.
 * @param include an Array of file patterns to match
 * @param exclude an optional Array of file patterns to exclude
 * @returns A set of all test files in the project.
 */
async function findTestFiles(workspaceRoot: string, include: Array<string>, exclude = new Array<string>()): Promise<Array<string>> {
    const globOptions = {
        cwd: workspaceRoot ?? path.resolve(process.cwd()),
        ignore: ['node_modules/**'].concat(exclude),
        braceExpansion: false,
        extglob: false, // Disable "extglob" patterns.
    };
    const included = await Promise.all(include.map((pattern) => (pattern != null) ? FastGlob(pattern, globOptions) : null));
    // Flatten and deduplicate any files found in multiple include patterns.
    return Array.from(new Set(included.flat().filter(i => i != null)).values());
}

// Custom builder implementation
export async function jasmineBuilder(options: JasmineBuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
    const specs = await findTestFiles(path.resolve(process.cwd()), options.testFiles);
    console.log('building tests...');
    const buildResult = await build(context, {
        // Build all the test files.
        entryPoints: [...specs],
        tsConfig: options.tsConfig ?? 'tsconfig.json',
        polyfills: options.polyfills ?? ['zone.js', 'zone.js/testing'],
        outputPath: options.testOut ?? 'dist',
        aot: false,
        index: null,
        outputHashing: OutputHashing.None,
        outExtension: 'mjs', // Force native ESM.
        optimization: false,
        deleteOutputPath: true,
        sourceMap: {
            scripts: true,
            styles: false,
            vendor: false,
        },
    });
    if (!buildResult.success) {
        return buildResult; // exit if failure detected
    }
    console.log('starting test execution...');
    const jbr = await resolveModule('jasmine-browser-runner/bin/jasmine-browser-runner');
    if (!jbr) {
        return { success: false, error: `unable to locate 'jasmine-browser-runner' binary`};
    }
    const exitCodes = await Promise.all(options.configFilePaths.map(c => test(c, jbr, context)));
    
    if (exitCodes.some(c => c != 0)) {
        return { success: false, error: `non-zero exit code returned from tests: [${exitCodes}]`};
    }
    return { success: true };
}

// Create the builder
export default createBuilder<JasmineBuilderOptions, BuilderOutput>(jasmineBuilder);
