/**
 * xl_pup request
 * @author Xiaolong
 */
import {isFunction, isArray, log} from './utils'
import wait, {dispatchNext} from './wait'

const requestList = {}
let Interception = null
let requestInfo = {
    status: 200,
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
    },
    contentType: 'application/json;charset=utf-8',
}
let before = (request) => {
    const type = request.resourceType()
    const methods = request.method()
    let postData = request.postData()
    const url = request.url()
    postData = JSON.parse(postData)
    return {
        request,
        type,
        methods,
        postData,
        url
    }
}
let beforeProxy = null


const dealRequest = async (request) => {
    const type = request.resourceType()
    const methods = request.method()
    if (type !== 'xhr' || methods === 'OPTIONS') {
        request.continue()
        return
    }
    let param = before(request)
    if (beforeProxy) param = beforeProxy(request)
    const {
        postData,
        url
    } = param
    const requestProxy = requestList[url];
    if (!requestProxy && !Interception) {
        request.continue()
        return
    }
    log(`请求接口__request__${url}`)
    const {proxy, call} = requestProxy || Interception
    await proxy({
        request,
        type,
        postData,
        url,
    }, (data, clear) => {
        request.respond({
            ...requestInfo,
            body: JSON.stringify(data)
        })
        if (clear) call()
    })

}

export const setProxy = async (proxy, option, time) => {
    Interception = {
        proxy
    }
    const promise = new Promise(resolve => {
        Interception.call = () => {
            resolve()
            Interception = null
        }
    })
    const {path, type} = option
    await wait(time)
    await dispatchNext(path, type, option)
    return promise
}

export const setBefore = (deal) => {
    beforeProxy = (request) => {
        const param = before(request)
        const params = deal(param)
        return {...param, ...params}
    }
}

export const setResponse = (info = {}) => {
    requestInfo = {...requestInfo, ...info}
}

export const setRequest = async (request, option, time) => {
    const promise = new Promise(resolve => {
        if (isArray(request)) {
            request.forEach(item => {
                let {name, data, clear = false} = item
                requestList[name] = {
                    proxy: async (req, end) => {
                        if (isFunction(data)) data = data(req)
                        end(data, clear)
                    },
                    call: () => {
                        resolve()
                    }
                }
            })
        } else {
            let {name, data, clear = true} = request
            requestList[name] = {
                proxy: async (req, end) => {
                    if (isFunction(data)) data = data(req)
                    end(data, clear)
                },
                call: () => {
                    resolve()
                }
            }
        }
    })
    const {path, type} = option
    await wait(time)
    await dispatchNext(path, type, option)
    return promise
}

const request = async () => {
    const {PAGE} = global
    await PAGE.setRequestInterception(true);
    await PAGE.on('request', dealRequest)
}

export default request;
