const puppeteer = require('puppeteer');
// let request = require('request-promise-native');
const sleep=ms=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
}
//使用 puppeteer.launch 启动 Chrome
(async () => {
    const browser = await puppeteer.launch({
        headless: false,   //有浏览器界面启动
        slowMo: 100,       //放慢浏览器执行速度，方便测试观察
        args: [            //启动 Chrome 的参数，详见上文中的介绍
            '–no-sandbox',
        ],
    });
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 800});
    await page.goto('http://localhost:8882/#/');
    // 1. 登录
    let element=await page.$('.ivu-btn-long')
    await element.click()
    
    await page.goto('http://localhost:8882/#/diy');
    await sleep(2000)
    // 选择尺寸
    let btn=await page.$('.submit-ratio button')
    await btn.click()
    await btn.click()
    await btn.click()

    const [scene,text,public,music,bg,material]=(await page.$$('.tab-container .tab-item'))

    // 添加素材
    await public.click()
    await sleep(1000)
    let item=await page.$('.image-wrapper.is-material')
    await item.click()

    //添加背景
    await bg.click()
    await sleep(1000)
    let oneBg=await page.$('.image-wrapper')
    await oneBg.click()
    
    // 添加音乐
    await music.click()
    await sleep(1000)
    await page.hover('.music-item')
    let musicBtn=await page.$('.music-item button')
    await musicBtn.click()

    // 点击合成
    const runBtn=await page.$('.run-btn')
    runBtn.click()



})();