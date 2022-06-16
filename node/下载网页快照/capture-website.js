console.log('haha')

const  captureWebsite =require('capture-website') ;
const fn=async()=>{
    await captureWebsite.file('https://sspai.com/post/44027', 'screenshot.png');
}
fn()