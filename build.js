const child_process = require('child_process')
var path = require('path');
const shell = require('shelljs')
const fs = require('fs')
var argv = require('yargs').argv

const source = argv.s || ''
const dist = argv.d || 'dist'
const list = shell.ls(path.join(source, '*.js'))
if(!fs.existsSync(dist)) shell.mkdir(dist)
list.forEach(item => {
    const distItem = item.replace(source,dist)
    console.log(`npx babel -o ${distItem} ${item}`)
    shell.exec(`npx babel -o ${distItem} ${item}`)
})

// exec(`npx babel ${file} --out-file ${outFile}`, () => {
//     if (argv.c) {
//         exec(`uglifyjs ${outFile} -c -o ${outFile}`, () => {
//             console.log(chalk.blue(`成功！`))
//         })
//     } else {
//         console.log(chalk.blue(`成功！`))
//     }
//
// })
