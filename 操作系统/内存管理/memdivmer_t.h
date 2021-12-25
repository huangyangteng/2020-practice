//把多个bafhlst_t数据结构组织起来，形成一个bafhlst_t结构数组，并把结构数组放在memdivmer中
#define MDIVMER_ARR_LMAX 52

typedef struct memdivmer_t
{
    spinlock_t dm_lock;
    u32_t dm_stus;//状态
    uint_t dm_divnr;//内存分配次数
    uint_t dm_mernr;//内存合并次数
    bafhlst_t dm_mdmlielst[MDIVMER_ARR_LMAX];//bafhlst_t结构数组
    bafhlst_t dm_onemsalst;//单个的bafhlst_t结构
};
