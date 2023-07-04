import * as process from 'process';
import * as path from 'path';
import * as cp from 'child_process';
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { buildEsbuildBrowser } from '@angular-devkit/build-angular/src/builders/browser-esbuild';
import { OutputHashing } from '@angular-devkit/build-angular';
import { findTestFiles } from './test-files';

// Custom builder options interface
interface JasmineBuilderOptions extends JsonObject {
    testFiles: Array<string>; // The paths to spec files to build
    configFilePath: string; // The path to your jasmine-browser.json file
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
        for await (let result of buildEsbuildBrowser(options, context)) { 
            /* do nothing */
        };
        return { success: true };
    } catch (err) {
        return { success: false, error: err.message };
    }
}

async function wait(duration: number): Promise<void> {
    return await new Promise(resolve => setTimeout(resolve, duration));
}

// Custom builder implementation
export async function jasmineBuilder(options: JasmineBuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
    const specs = await findTestFiles(path.resolve(process.cwd()), options.testFiles);
    console.log('building tests...');
    const buildResult = await build(context, {
        // Build all the test files and also the `jest-global` and `init-test-bed` scripts.
        entryPoints: new Set([...specs]),
        tsConfig: options.tsConfig,
        polyfills: options.polyfills ?? ['zone.js', 'zone.js/testing'],
        outputPath: options.testOut,
        aot: false,
        index: null,
        outputHashing: OutputHashing.None,
        outExtension: 'mjs',
        commonChunk: false,
        optimization: false,
        buildOptimizer: false,
        sourceMap: {
            scripts: true,
            styles: false,
            vendor: false,
        },
    });
    if (!buildResult.success) {
        return buildResult; // exit if failure detected
    }
    // console.log('starting test execution...');
    // const jbr = await resolveModule('jasmine-browser-runner/bin/jasmine-browser-runner');
    // if (!jbr) {
    //     return { success: false, error: `unable to locate 'jasmine-browser-runner' binary`};
    // }
    // const jbrProc = cp.execFile(process.execPath, [
    //     jbr,
    //     `--config="${options.configFilePath}"`
    // ]);
    // let exitCode: number;
    // let doneTesting: boolean = false;
    // // Stream test output to the terminal.
    // jbrProc.stdout?.on('data', (chunk) => {
    //     context.logger.info(chunk);
    // });
    // jbrProc.stderr?.on('data', (chunk) => {
    //     // Write to stderr directly instead of `context.logger.error(chunk)`
    //     process.stderr.write(chunk);
    // });
    // jbrProc.on('exit', (code: number, signal: NodeJS.Signals) => {
    //     exitCode = code;
    //     doneTesting = true;
    // });
    // try {
    //     while (!doneTesting) {
    //         await wait(1000);
    //     }
    // } catch (error) {
    //     // No need to propagate error message, already piped to terminal output.
    //     return { success: false };
    // }
    // if (exitCode != 0) {
    //     return { success: false, error: `non-zero exit code returned from tests: '${exitCode}'`};
    // }
    return { success: true };
}

// Create the builder
export default createBuilder<JasmineBuilderOptions, BuilderOutput>(jasmineBuilder);
