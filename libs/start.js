/**
 * xl_pup start
 * @author Xiaolong
 */

import expose from "./exposeFunction";
import path from 'path'
import {read} from "./utils";

let startList = [
    {name: '默认', storage: {}, storagePath: '', session: {}, sessionPath: '', cookie: '', cookiePath: '', set: null},
]

const getHost = (url = '') => {
    const reg = url.match(/(^https?:\/\/[^/@!~`$%^&*()+=]+)\/.+$/)
    return reg[1]
}

const setStart = async (list) => {
    startList = startList.concat(startList, list)
}

const start = async (page, URL) => {
    await expose('startItem', async (index) => {

    })
    const pageContent = await read(path.join(__dirname, '../index.html'))
    let content = '';
    Object.keys(startList).forEach((item, index) => {
        content += `<li index="${index}">默认</li>`
    })
    pageContent.replace('<!--list-->', content)
    const host = getHost(URL)
    await page.goto(`${host}/puppeteer.html`);
    await page.setContent(pageContent)
}

export default start
