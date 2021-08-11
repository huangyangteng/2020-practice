const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '3034647379@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'ezlcstobawzndgie',
  }
});

let mailOptionError = {
  from: '"掘金自动签到失败" <3034647379@qq.com>', // sender address
  to: 'huangyangteng@ebupt.com', // list of receivers
  subject: '掘金自动签到失败', // Subject line
  // 发送text或者html格式
  // text: 'Hello world?', // plain text body
  html: '<b>掘金自动签到失败</b>' // html body
};
let mailOptionSuccess = {
  from: '"掘金自动签到成功" <3034647379@qq.com>', // sender address
  to: 'huangyangteng@ebupt.com', // list of receivers
  subject: '掘金自动签到成功', // Subject line
  // 发送text或者html格式
  // text: 'Hello world?', // plain text body
  html: '<b>掘金自动签到成功</b>' // html body
};



module.exports={
  sendErrorEmail(){
    // send mail with defined transport object
    transporter.sendMail(mailOptionError, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  },
  sendSuccessEmail(){
    transporter.sendMail(mailOptionSuccess, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  }
}