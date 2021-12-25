//挂载msadsc_t结构
typedef struct s_BAFHLST
{
    spinlock_t af_lock;    //保护自身结构的自旋锁
    u32_t af_stus;         //状态 
    uint_t af_oder;        //页面数的位移量
    uint_t af_oderpnr;     //oder对应的页面数 比如 oder为2那就是1<<2=4
    uint_t af_fobjnr;      //多少个空闲msadsc_t结构，即空闲页面
    uint_t af_mobjnr;      //此结构的msadsc_t结构总数，即此结构总页面
    uint_t af_alcindx;     //此结构的分配计数
    uint_t af_freindx;     //此结构的释放计数
    list_h_t af_frelst;    //00+
    list_h_t af_alclst;    //挂载此结构已经分配的msadsc_t结构
}bafhlst_t;