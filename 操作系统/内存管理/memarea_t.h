//内存区数据结构
#define MA_TYPE_HWAD 1
#define MA_TYPE_KRNL 2
#define MA_TYPE_PROC 3
#define MA_HWAD_LSTART 0
#define MA_HWAD_LSZ 0x2000000
#define MA_HWAD_LEND (MA_HWAD_LSTART+MA_HWAD_LSZ-1)
#define MA_KRNL_LSTART 0x2000000
#define MA_KRNL_LSZ (0x40000000-0x2000000)
#define MA_KRNL_LEND (MA_KRNL_LSTART+MA_KRNL_LSZ-1)
#define MA_PROC_LSTART 0x40000000
#define MA_PROC_LSZ (0xffffffff-0x40000000)
#define MA_PROC_LEND (MA_PROC_LSTART+MA_PROC_LSZ)

typedef struct memarea_t
{
    list_h_t ma_list;//内存区自身的链表
    spinlock_t ma_lock;//保护内存区的自旋锁
    uint_t ma_stus;//内存区的状态
    uint_t ma_flgs;//内存区的标志
    uint_t ma_type;//内存区的类型
    sem_t ma_sem;//内存区的信号量
    wait_l_head_t ma_waitlst;//内存区的等待队列
    uint_t ma_maxpages;//内存区总的页面数
    uint_t ma_allocpages;//内存区分配的页面数
    uint_t ma_freepages;//内存区空闲的页面数
    uint_t ma_resvpages;//内存区保留的页面数
    uint_t ma_horizline;//内存区分配时的水位线
    adr_t ma_logicstart;//内存区开始地址
    adr_t ma_logicend;//内存区结束地址
    uint_t ma_logicsz;//内存区大小
     
};
