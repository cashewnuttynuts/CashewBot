import path from 'path';
import fs from 'fs';

var normalizedPath = path.join('assets', 'quiz_json')
var files: any = {};
fs.readdirSync(normalizedPath).forEach(function (file) {
    files[file] = require("../assets/quiz_json/" + file);
});

export function renameKey(array: Array<any>, oldKey: string, newKey: string) {

    const arr = array;
    arr.forEach(obj => {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    });
    const updatedJson = arr;
    return JSON.stringify(updatedJson);
}

export function wrapInList(array: Array<any>, key: string) {
    const arr = array;
    arr.forEach((obj) => {
        obj[key] = new Array(obj[key]);
    });
}

export function rewriteFile(file: string, content: any) {
    fs.writeFile(file, content, err => {
        if (err) {
            console.error(err);
        }
    })
}
