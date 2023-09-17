const path = require('path');
const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => cryptoOrigCreateHash(algorithm === 'md4' ? 'sha256' : algorithm);

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'game.js')
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public')
  }
}
