/**
 * xl_pup 初始化
 * @author Xiaolong
 */

import puppeteer from 'puppeteer-core';
import {log} from './utils'
import exposeFunction from "./exposeFunction";
import {setBefore} from "./request";
import path from 'path'

let OPTIONS = {
    ignoreHTTPSErrors: true,
    headless: false,
    userDataDir: path.join(process.cwd(),'./pup_data_cache/'),
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
        width: 375,
        height: 667,
        isMobile: true,
    }
}

const PresetPage = async () => {
    const browser = await puppeteer.launch(OPTIONS)
        .catch(() => {
            console.log('错误')
            browser.close()
        })
    return await browser.newPage();
}

const init = async (option = {}, URL) => {
    const {beforePage, exposes, beforeProxy} = option
    OPTIONS = {...OPTIONS, ...option}
    const page = await PresetPage()
    global.PAGE = page
    if (exposes) await exposeFunction(exposes)
    if (beforeProxy) setBefore(beforeProxy)
    if (beforePage) {
        log(`打开页面beforePage:${URL}`)
        await beforePage(URL, option)
    }
    log(`打开页面:${URL}`)
    await page.goto(URL);
    return page
}

export default init;
