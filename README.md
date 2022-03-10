# Bicarbon8GithubIo

website portfolio for Jason Holt Smith <bicarbon8@gmail.com>

## Publishing to GitHub Pages
the site uses Webpack Module Federation to load in the Angular modules from external GitHub Pages (previously this was done via Git Submodules) so development locally vs running in production will typically rely on separate URL's for the external modules. These are delineated between the Angular `src/environments`, but it is possible to run locally while referencing the public / production external modules by using `ng serve --configuration production`
1. build locally using the following command: `ng build --configuration production --output-path ./docs`
2. push changes to `main` branch
