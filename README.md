# MyNewLoad

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In a diffrent terminal run a node-express application and Run `npm run backend-app` 

## bundle size for analyze
### run commands 
    ng build --prod --stats-json
    npm run bundle-report


## bundle size for install in yout own project
### run command 
    npm install webpack-bundle-analyzer ("webpack-bundle-analyzer": "^3.8.0")
### add to package.json
    "bundle-report": "webpack-bundle-analyzer dist-prod/stats-es2015.json",
### run commands 
    ng build --prod --stats-json
    npm run bundle-report
