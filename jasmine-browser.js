module.exports = {
    srcDir: "src/",
    specDir: 'dist/spec/',
    specFiles: [
        "**/*[sS]pec.?(m)js"
    ],
    helpers: [
        "**/polyfills.?(m)js",
        "**/init-test-bed.?(m)js"
    ],
    // esmFilenameExtension: ".js",
    browser: {
        name: 'chrome'
    }
}