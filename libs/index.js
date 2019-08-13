/**
 * xl_pup start
 * @author Xiaolong
 */


import init from './init'
import exposeFunction, {setExposeFun} from './exposeFunction'
import request, {setResponse, setRequest, setProxy, setBefore} from './request'
import Wait, {dispatchNext, waitXpath} from "./wait";
import * as utils from './utils'

/*
* 注入函数
* 拦截函数
* */
export const setExpose = setExposeFun // 设置全局函数拦截，并返回数据

/*
* 异步操作
* */
let waitTime = 500;
export const setTime = (time) => {
    waitTime = time
}
export const path = waitXpath
export const wait = Wait
export const dispatch = dispatchNext
export const click = async (path, time = waitTime) => {
    await wait(time)
    await dispatchNext(path)
}
export const input = async (path, text, delay = 100, time = waitTime) => {
    await wait(time)
    await dispatchNext(path, 'input', {
        text,
        delay,
    })
}
export const del = async (path, count, time = waitTime) => {
    await wait(time)
    await dispatchNext(path, 'delete', {
        count
    })
}
export const enter = async (path, text, time = waitTime) => {
    await wait(time)
    await dispatchNext(path, 'enter', {
        text
    })
}
export const focus = async (path, time = waitTime) => {
    await wait(time)
    await dispatchNext(path, 'focus')
}
export const check = async (path, text, time = waitTime) => {
    await wait(time)
    await dispatchNext(path, 'check', {
        text
    })
}

/*
* Util
* */
export const Util = utils
export const log = utils.log
export const error = utils.error

/*
* request
* */

export const setRes = setResponse;
export const setReq = setRequest;
export const proxy = setProxy;

/*
* 实例化页面
* */
const index = async (URL, option) => {
    const PAGE = await init(option, URL);
    await request()
    return PAGE
}

export default index;

