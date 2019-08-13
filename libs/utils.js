/**
 * utils
 * @author Xiaolong
 */

import fs from 'fs';
import chalk from 'chalk'

let count = 0
export const logInfo = (msg, type = true) => {
    if (type) count += 1
    console.log(chalk.green(`${count}、${msg}`))
}

export const log = (msg, type = true) => {
    if (type) count += 1
    console.log(chalk.green(`${count}、${msg}`))
}
export const error = (msg, type = true) => {
    if (type) count += 1
    console.log(chalk.red(`${count}、${msg}`))
}


export const parse = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.warn(`${jsonString}___JSON.parse__参数不对`);
        return {};
    }
};

/*
* 类型判断
* */
const _ARRAY_NAME = '[object Array]';
const _OBJECT_NAME = '[object Object]';
const _FUNCTION_NAME = '[object Function]';

// 得到对象类型
function _isType(obj) {
    return Object.prototype.toString.call(obj);
}

export function isFunction(obj) {
    return _isType(obj) === _FUNCTION_NAME;
}

export function isObject(obj) {
    return _isType(obj) === _OBJECT_NAME;
}

export function isArray(obj) {
    return _isType(obj) === _ARRAY_NAME;
}

export function isEmptyObject(obj) { // 是否是空对象
    for (const t in obj) {
        return false;
    }
    return true;
}

const getStorage = async (name) => {
    const {PAGE} = global
    const page = getPage()
    return await page.evaluate(() => {
        return window.localStorage.getItem(name)
    });
}
const setStorage = async (name, storage) => {
    const {PAGE} = global
    const page = getPage()
    return await page.evaluate((storage) => {
        return window.localStorage.setItem(name, storage)
    }, storage);
}
const saveStorage = async (path) => {
    const storage = await getStorage()
    shell.exec(`echo ${storage} > ${path}`)
}
const readStorage = async (path) => {
    if (fs.existsSync(path)) {
        const storage = fs.readFileSync(path, 'utf8')
        await setStorage(storage)
    }
}

export const read = async (path) => {
    return new Promise(resolve => {
        if (fs.existsSync(path)) {
            const storage = fs.readFileSync(path, 'utf8')
            resolve(storage)
        }
    })
}
