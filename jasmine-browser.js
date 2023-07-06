module.exports = {
    srcDir: "src/",
    specDir: 'dist/spec/',
    specFiles: [
        "**/*[sS]pec.?(m)js"
    ],
    helpers: [
        "**/polyfills.?(m)js",
        "**/test.?(m)js"
    ],
    browser: {
        name: 'chrome'
    }
}