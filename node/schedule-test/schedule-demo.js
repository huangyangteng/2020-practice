const schedule = require('node-schedule');

const  scheduleTask = ()=>{
  //每分钟的第30秒定时执行一次:
    schedule.scheduleJob({second:0,minute:0,hour:7},()=>{
        console.log('scheduleTask:' + new Date());
    }); 
}

scheduleTask();