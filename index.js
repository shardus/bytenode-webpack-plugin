const Module = require('module')
const bytenode = require('bytenode')

require('v8').setFlagsFromString('--no-lazy')

class BytenodeWebpackPlugin {
  constructor (options = {}) {
    this.options = Object.assign({
      compileAsModule: true,
      keepSource: false
    }, options)
  }

  apply (compiler) {
    // Before emitting compiled files
    compiler.hooks.emit.tap('BytenodeWebpackPlugin', compilation => {
      // For all .js files
      for (const filename in compilation.assets) {
        if (/\.js$/.test(filename)) {
          // Compile them to v8 bytecode and emit them as .jsc files
          let source = compilation.assets[filename]._value
          if (this.options.compileAsModule) {
            source = Module.wrap(source)
          }
          const bytecode = bytenode.compileCode(source)
          compilation.assets[filename.replace('.js', '.jsc')] = {
            source: () => bytecode,
            size: () => bytecode.length
          }
          if (!this.options.keepSource) {
            delete compilation.assets[filename]
          }
        }
      }
    })
  }
}

module.exports = BytenodeWebpackPlugin
