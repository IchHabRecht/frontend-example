# Example frontend project

This is a documentation for my future self how to set up and run a frontend project using webpack and Tailwind CSS.

## Initialize project files

- add a basic HTML 5 `index.html` with a single headline

- initialize a bare `package.json` for npm dependency management

```
npm init
```

## *webpack* - a static module bundler for modern JavaScript applications

### Install

- add `webpack` as dev dependency

```
npm install -D webpack@^5.38
```

- add a bare `webpack.config.js` webpack configuration file

    - add an empty `src/index.js` file

- add npm `build` script to run webpack

    - add `webpack CLI` as dev dependency to be able to run webpack

```
npm install -D webpack-cli@^4.7
npm run build
```

### Install DevServer

Use webpack with a development server that provides live reloading.

- add `webpack-dev-server` as dev dependency

    - adjust `webpack-dev-server` configuration

        - use `public` path as content base and watch for changes

        - serve `webpack` files from `dist` folder

    - add npm `serve` script to run webpack

```
npm install -D webpack-dev-server@^3.11
npm run serve
```
