module.exports = {
    srcDir: "src/",
    specDir: 'dist/spec/',
    specFiles: [
        "**/*[sS]pec.?(m)js"
    ],
    helpers: [
        "**/test.?(m)js"
    ],
    browser: {
        name: 'chrome'
    }
}