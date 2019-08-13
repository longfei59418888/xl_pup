/**
 * xl_pup 请求拦截
 * @author Xiaolong
 */
import {isFunction, log} from './utils'

let NAME = null
let exposeFunctionHandlers = {}

export const setExposeFun = async (name, data) => {
    exposeFunctionHandlers[name] = data
}

const dealExpose = async (name, data) => {
    log(`调用方法：${NAME}_${name}`)
    let rst = exposeFunctionHandlers[name]
    if (isFunction(rst)) {
        rst = rst(data)
    }
    return rst;
}

const exposeFunction = async (name, deal = dealExpose) => {
    const {PAGE} = global
    NAME = name
    await PAGE.exposeFunction(name, deal);
}

export default exposeFunction
