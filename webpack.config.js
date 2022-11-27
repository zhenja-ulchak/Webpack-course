
const path = require('path')
//exports object
module.exports = {
    mode: 'development',
    entry: './src/index.js',// start file
    output: {
        filename:'bandle.js',
        path: path.resolve(__dirname, 'dist')
    }
}