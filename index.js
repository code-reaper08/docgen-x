const fs = require("fs");

exports.writemitpub = writemit;
exports.writeapapub = writeapa;
exports.writegnu3pub = writegnu3;
exports.writegnu2pub = writegnu2;
exports.writebsd2pub = writebsd2;
function writemit(){
    const mit = fs.readFileSync(`${__dirname}/temp/MIT.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, mit)
}

function writeapa(){
    const apa = fs.readFileSync(`${__dirname}/temp/APA.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, apa)
}

function writegnu3(){
    const gnu3 = fs.readFileSync(`${__dirname}/temp/GNU3.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, gnu3)
}

function writegnu2(){
    const gnu2 = fs.readFileSync(`${__dirname}/temp/GNU2.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, gnu2)
}

function writebsd2(){
    const bsd2 = fs.readFileSync(`${__dirname}/temp/BSD2.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, bsd2)
}

writemit()
writeapa()
writegnu3()
writegnu2()
writebsd2()
