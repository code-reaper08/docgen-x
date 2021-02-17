const fs = require("fs");

exports.writeHTML5pub = writeHTML5;
function writeHTML5(){
    const html5 = fs.readFileSync(`${__dirname}/temp/LICENSEFILE.md`)
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, html5)
}

writeHTML5()