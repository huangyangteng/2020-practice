//表示页的状态、页的地址、页的分配计数、页的类型、页的链表
//msadsc Memory space address
//内存空间地址描述符标志
typedef struct s_MASDFLGS
{
    /* data */
    u32_t mf_olkty:2; //挂入链表的类型
    u32_t mf_lstty:1; //是否挂入链表
    u32_t mf_mocty:2;//分配类型，被谁占用了，内核|应用|空闲
    u32_t mf_marty:3; //属于哪个区
    u32_t mf_uindx:24;//分配计数
}__attribute__((packed)) msadflags;

//物理地址和标志
typedef struct s_PHYADRFLGS
{
    /* data */
    u64_t paf_alloc:1；  //分配位
    u64_t paf_shared:1;//共享位
    u64_t paf_swap:1//交换位
    u64_t paf_cache:1;//缓存位
    u64_t paf_kmap:1;//映射位
    u64_t paf_lock:1;//锁定位
    u64_t paf_dirty:1;//脏位
    u64_t paf_rv2:4;//保留位
    u64_t paf_padrs:52;//页物理地址位
}__attribute ((packed)) phyadrflgs_t;


//内存空间地址描述符
typedef struct s_MSADSC
{
    /* data */
    list_h_t md_list;//链表
    spinlock_t md_lock;//自旋锁
    msadflgs_t md_indxflgs;//内存空间地址描述符的标志
    phyadrflgs_t md_phyadrs; //物理地址和标志
    void* md_odlink; //相邻且相同大小msadsc的指针
}__attribute__((packed)) msadsc_t;
