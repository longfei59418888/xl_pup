require('babel-register')
import index, {del, input, click, check, enter, focus, log} from 'xl_pup'
import {setReq, setRes, proxy, setExpose} from 'xl_pup'


(async () => {
    await index('http://127.0.0.1:8088/#/index/home', {
        beforeProxy: (param) => {
            const {postData} = param
            return {
                url: postData.method
            }
        },
        exposes: 'puppeteerNative'
    })
    await click('//*[@id="app"]/div/div/div/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div[1]/div/div/div/div/span')
    log('进入登录页面')
    await input('//*[@id="app"]/div/div/div/div/div/div[2]/div/div[1]/div/form/input', '8545896554')
    await setReq([
        {
            name: 'qihoo.in.inform.sms.send',
            data: (param) => {
                return {
                    "flag": "S",
                    "code": null,
                    "msg": '不支持这个手机号',
                    "data": {"cdKey": "5878372304487981056", "sendInterval": "20"}
                }
            },
            clear: true,
        }
    ], {
        path: '//*[@id="app"]/div/div/div/div/div/div[2]/div/div[2]/div/span',
    })
    await input('//*[@id="app"]/div/div/div/div/div/div[2]/div/div/div/div/div[1]/div/input', '1')
    await input('//*[@id="app"]/div/div/div/div/div/div[2]/div/div/div/div/div[2]/div/input', '3')
    await input('//*[@id="app"]/div/div/div/div/div/div[2]/div/div/div/div/div[3]/div/input', '4')
    await setReq([
        {
            name: 'qihoo.in.user.mobile.login',
            data: {
                "flag": "S",
                "code": "BLPS01001",
                "msg": "验证失败",
                "data": {"token": "123456789", "userNo": "123456789", "mobileNo": "8545854585"}
            },
            clear: false,
        },
        {
            name: 'qihoo.in.user.summary.query',
            data: (param) => {
                return {
                    "flag": "S",
                    "code": null,
                    "msg": null,
                    "data": {
                        "userState": "APL",
                        "infoName": "applInfo",
                        "applInfo": {
                            "applNo": null,
                            "dateAppl": null,
                            "flowNo": null,
                            "applProgress": "0%",
                            "contractNo": null,
                            "creditAmt": null,
                            "availableAmt": null,
                            "usedAmt": null,
                            "minLoanAmt": null
                        },
                        "loanInfo": {
                            "loanReqNo": null,
                            "loanAmt": null,
                            "dateLoan": null,
                            "rpyAmt": null,
                            "dateDue": null,
                            "rpyRemainDays": null,
                            "overDueDays": null
                        },
                        "rejectInfo": {"rejectTime": null, "rejectTimeUnit": null},
                        "defaultCreditAmt": "101000",
                        "infromMsg": "Low as ?5 daily interest for loan amount of ?100000",
                        "sysTime": "1565319833847"
                    }
                }
            },
            clear: true,
        }
    ], {
        path: '//*[@id="app"]/div/div/div/div/div/div[2]/div/div/div/div/div[4]/div/input',
        type: 'input',
        text: '5'
    })
    await setExpose('panCardOCR', {
        imageMap: JSON.stringify({
            filePanId: 'filePanId_1234',
        }),
        scanResult: JSON.stringify({
            uid: 'uid',
            par1: 'ocr and verification',
            imei_code: '860569042582125',
            status: 'request_status',
            report_id: '987456321',
            comment: 'Sorry, your picture is not clear or too small. Please try to alig the reference text with the corresponding position on the rectangular box and certificate when shooting',
            data: {
                user_name: 'xiao long',
                date_of_birth: '28/MAR/2011',
                user_father_name: 'wang',
                pan_code: '111111111',
                verified_result: 'pan_report',
            },
        }),
    })

})()
