# Bytenode Webpack Plugin

A [webpack](https://webpack.js.org/) plugin that simplifies compiling your JS
source code into V8 bytecode using [Bytenode](https://github.com/OsamaAbbas/bytenode).

Essentially converts raw `.js` files in your output into compiled `.jsc` files.

## Install

```
  npm install --save-dev bytenode-webpack-plugin
```

```
  yarn add --dev bytenode-webpack-plugin
```

## Usage

```javascript
const BytenodeWebpackPlugin = require('bytenode-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new BytenodeWebpackPlugin()
  ]
}
```

## Options

| Name                  | Type      | Default | Description                                                    |
|-----------------------|-----------|---------|----------------------------------------------------------------|
| **`compileAsModule`** | `boolean` | `true`  | Allow the resulting `.jsc` file to be used as a module or not. |
| **`keepSource`**      | `boolean` | `false` | Keep JS source files in output or not.                         |

To use options:

```javascript
const BytenodeWebpackPlugin = require('bytenode-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new BytenodeWebpackPlugin({
        compileAsModule: false,
        keepSource: true
    })
  ]
}
```

---

<div style="display:flex; flex-flow:row; align-items:center;">
  <a href="https://shardus.com/" target="_blank">
    <img src="https://shardus.com/assets/img/logo.svg" height="100" width="100">
  </a>
  <span style="font-size:40px">
    Shardus
  <span>
</div> 

