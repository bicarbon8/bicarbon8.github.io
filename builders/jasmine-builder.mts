import * as process from 'process';
import * as path from 'path';
import * as cp from 'child_process';
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import * as jbr from 'jasmine-browser-runner';
import { buildEsbuildBrowser } from '@angular-devkit/build-angular/src/builders/browser-esbuild/index.js';
import { OutputHashing } from '@angular-devkit/build-angular';
import { findTestFiles } from './test-files.mjs';

// Custom builder options interface
interface JasmineBuilderOptions extends JsonObject {
    testFiles: Array<string>; // The paths to spec files to build
    configFilePath: string; // The path to your jasmine-browser.json file
}

/** Safely resolves the given Node module string. */
function resolveModule(module) {
    try {
        return require.resolve(module);
    }
    catch {
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

// Custom builder implementation
export async function jasmineBuilder(options: JasmineBuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
    const specs = await findTestFiles(path.resolve(process.cwd()), options.testFiles);
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
    
    const config = options.configFilePath;
    // let cfg: any;
    // try {
    //     const cfgPath = path.resolve(process.cwd(), config);
    //     cfg = await import(cfgPath);
    // } catch (e) {
    //     return { success: false, error: e?.message };
    // }

    // // Run the Jasmine specs
    // await jbr.default.runSpecs(config);
    return { success: true };
}

// Create the builder
export default createBuilder<JasmineBuilderOptions, BuilderOutput>(jasmineBuilder);
