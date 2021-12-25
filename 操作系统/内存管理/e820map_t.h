//物理内存布局信息
#define RAM_USABLE 1 //可用内存
#define RAM_RESERV 2 //保留内存不可使用
#define RAM_ACPIREC 3 //ACPI表相关的
#define RAM_ACPINVS 4 //acpi  NAV空间
#define RAM_AREACON 5 //包含环内存
typedef struct s_e820
{
    u64_t saddr;//内存开始地址
    u64_t lsize;//内存大小
    u32_t type;//内存类型
}e820map_t;
