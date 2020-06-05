# xl_pup
######  基于 puppeteer UI 自动化测试工具

## 安装
<code>
npm install xl_pup
</code>

## 使用

```
require('babel-register')  // 需要加babel,不然不能用es6模块功能
import pup, {del, input, click, check, enter, focus, log} from 'xl_pup'
import {setReq, setRes, proxy, setExpose} from 'xl_pup'

// 初始化页面
    await pup('http://127.0.0.1:8088/#/index/home', {
        beforeProxy: (param) => {  // 请求代理，
            const {postData} = param
            return {
                url: postData.method
            }
        },
        exposes: 'puppeteerNative' // 页面注入一个函数，用户拦截
    })
    
   // 该工具以xpath形式获取节点元素
   // 点击元素 
   await click('//*[@id="app"]/div/div/div/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div[1]/div/div/div/div/span')
   // 输入input文本
   await input('//*[@id="app"]/div/div/div/div/div/div[2]/div/div[1]/div/form/input', '8545896554')

```

## 方法
#### default(url,option) : 初始化，创建要给页面，用于测试  
#### del(path,count)：删除input内文本
#### input(path,text)：输入input内文本
#### click(path)：点击某一元素
#### check(path,text)：检查元素内文本
#### enter(path,text)：向input继续输入文本
#### log(msg)：打印流程
#### focus(path)：获取焦点
#### setReq()：设置请求拦截
#### proxy()：设置请求代理
#### setExpose()：设置 exposes 中数据

###### 想要了解更多可以去githug上面自行浏览
###### github 有问题可以在github留言


