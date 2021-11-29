const nodemailer = require('nodemailer');
const schedule=require('node-schedule')

let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    //邮件名
    user: '3034647379@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'ezlcstobawzndgie',
  }
});


// 发送邮件
function sendEmail(content){
    let mailOption = {
        from: '"分享排期" <3034647379@qq.com>', // sender address
        to: 'huangyangteng@ebupt.com;lipeng_1@ebupt.com;wulijiao@ebupt.com;libotao@ebupt.com;xiaolongxiang@ebupt.com;fanyuling@ebupt.com;mudongsheng@ebupt.com', // list of receivers
        subject: '分享排期', // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: `${content}` // html body
      };

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
}

const  scheduleTask = ()=>{
    //定时执行
    schedule.scheduleJob({second:0,minute:40,hour:14},()=>{
        logic()
    }); 
}
function logic(){
    const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
    const list=['黄养滕','李鹏','李伯涛','邬丽娇','樊玉玲','肖龙祥','母东生']
    // 乱序
    shuffleArray(list)
    // 发送邮件
    sendEmail(list)
}

;(function(){
    scheduleTask()
}())
