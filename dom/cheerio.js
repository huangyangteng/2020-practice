const shell=require('shelljs')
const cheerio=require('cheerio')


let str=shell.exec('curl -s http://10.1.69.42:12300/files/')
const $=cheerio.load(str.stdout)

console.log("$.html()", typeof $.html())
