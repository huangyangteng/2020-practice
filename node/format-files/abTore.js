const path = require("path");
const args = process.argv;

const rootName = args[2];
console.log("rootName", rootName)
const rootPath = path.resolve(process.cwd(), rootName);
console.log("rootPath", rootPath)
const alias = "@";

if (!rootPath || !alias) return;

const {
    promisify
} = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);
const readDirAsync = promisify(fs.readdir);
const writeFileAsync = promisify(fs.writeFile);
const statsAsync = promisify(fs.stat);

function testForAliasImport(file) {
    // console.log("-------------testForAliasImport -> file", file.content)
    if (!file.content) return file;

    const regex = /'@(\/\w+[\w\/.]+)'/gi;

    let match,
        search = file.content;

    while ((match = regex.exec(search))) {
        const matchString = match[0];
        console.log(`found alias import ${matchString} in ${file.filepath}`);
        file.content = file.content.replace(
            matchString,
            aliasToRelative(file, matchString)
        );
        search = search.substring(match.index + matchString.length);
    }

    return file;
}

function aliasToRelative(file, importString) {
    let importPath = importString
        .replace(alias, "")
        .split('"')
        .join("");
    const hasExtension = !!path.parse(importString).ext;

    if (!hasExtension) {
        importPath += ".ext";
    }

    const filepath = file.filepath
        .replace(rootPath, "")
        .split("\\")
        .join("/");

    let relativeImport = path.posix.relative(path.dirname(filepath), importPath);

    if (!hasExtension) {
        relativeImport = relativeImport.replace(".ext", "");
    }

    if (!relativeImport.startsWith("../")) {
        relativeImport = "./" + relativeImport;
    }

    relativeImport = `"${relativeImport}"`;

    console.log(`replaced alias import ${importString} with ${relativeImport}`);
    return relativeImport;
}

async function writeFile(file) {
    if (!file || !file.content || !file.filepath) return file;
    try {
        console.log(`writing new contents to file ${file.filepath}...`);
        await writeFileAsync(file.filepath, file.content);
    } catch (e) {
        console.error(e);
    }
}

async function prepareFile(filepath) {
    const stat = await statsAsync(filepath);
    return {
        stat,
        filepath
    };
}

async function processFile(file) {
    if (file.stat.isFile()) {
        console.log(`reading file ${file.filepath}...`);
        file.content = await readFileAsync(file.filepath);
        file.content = file.content.toString();
    } else if (file.stat.isDirectory()) {
        console.log(`traversing dir ${file.filepath}...`);
        await traverseDir(file.filepath);
    }
    return file;
}

async function traverseDir(dirPath) {
    try {
        const filenames = await readDirAsync(dirPath);
        // 获取绝对路径
        const filepaths = filenames.map(name => path.join(dirPath, name));
        
        const fileStats = await Promise.all(filepaths.map(prepareFile));
        const files = await Promise.all(fileStats.map(processFile));
        await Promise.all(files.map(testForAliasImport).map(writeFile));
    } catch (e) {
        console.error(e);
    }
}


traverseDir(rootPath)
    .then(() => console.log("done"))
    .catch(console.error);