//定义一个延迟队列
DelayedIncomingQueue delayed_incoming_queue;

// 定义延迟任务
stuck DelayTask{
    int64 id;
    CallBackFunction cbf;
    int start_time;
    int delay_time
}

DelayTask timerTask;
timerTask.cbf=showName
timerTask.start_time=getCurrentTime()
timerTask.delay_time=200 //设置延迟执行时间

// 延迟队列中添加延迟任务
delayed_incoming_queue.push(timerTask)

void ProcessTimerTask(){
    //从delayed_incoming_queue中取出已经到期的定时器任务
    //依次执行这些任务
}

TaskQueue task_queue;
void ProcessTask();
bool keep_running=true;

// ------------------ 主线程的任务执行
void MainThread(){
    for(;;){
        // 执行任务队列中的任务
        Task task=task_queue.taskTask();
        ProcessTAsk(task);

        // 执行延迟队列中的任务  执行完任务队列中的一个任务之后，查看延迟队列中是否有已经到期的任务，有则依次执行
        ProcessTimerTask()

        if(!keep_running){//如果设置了退出标志，那么直接退出线程循环
            break;
        }
    }
}