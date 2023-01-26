const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
const writeStream = fs.writeStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {
    console.log('-------chunk---------')
    console.log(chunk)
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk)
})

