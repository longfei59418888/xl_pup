# xl_pup
######  基于 puppeteer UI 自动化测试工具

## 安装
<code>
npm install xl_pup
</code>

## 使用

```
import pup, {del, input, click, check, enter, focus, log} from './dist/index.min'<br/>
import {setReq, setRes, proxy, setExpose} from './dist/index.min'

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
#### del(path)： 

