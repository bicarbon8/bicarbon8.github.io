import * as process from 'process';
import * as path from 'path';
import FastGlob from 'fast-glob';
/**
 * Finds all test files in the project.
 *
 * @param workspaceRoot The path to the root directory of the workspace.
 * @param include an Array of file patterns to match
 * @param exclude an optional Array of file patterns to exclude
 * @returns A set of all test files in the project.
 */
export async function findTestFiles(workspaceRoot: string, include: Array<string>, exclude = new Array<string>()): Promise<Set<any>> {
    const globOptions = {
        cwd: workspaceRoot ?? path.resolve(process.cwd()),
        ignore: ['node_modules/**'].concat(exclude),
        braceExpansion: false,
        extglob: false, // Disable "extglob" patterns.
    };
    const included = await Promise.all(include.map((pattern) => (pattern != null) ? FastGlob(pattern, globOptions) : null));
    // Flatten and deduplicate any files found in multiple include patterns.
    return new Set(included.flat().filter(i => i != null));
}