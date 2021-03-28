
const COOKIE='miniDialog=true; thw=cn; _fbp=fb.1.1610614714506.115501406; t=69015bc6ecfbdb5769dc4390f2b6983a; _bl_uid=qnkdem01mgh36knb1myXzv75dCI5; miniDialog=true; cookie2=13ffba7b752b6163ae2b1aab2c84439d; _tb_token_=f475beb7a10e8; _samesite_flag_=true; xlly_s=1; unb=2207417809129; sn=%E9%82%B1%E4%BA%9A%E6%95%8F%3A%E5%B0%8F%E9%B1%BC; csg=2c8c3eed; skt=ea714c5f688c8927; _cc_=V32FPkk%2Fhw%3D%3D; cna=4VPaF7Y72k4CAbaVoN5zSrJB; _m_h5_tk=b9d9677db11182613f21be2edbe3c5e2_1616772998646; _m_h5_tk_enc=9a593804514471bd8ee808e6c4ccf7c9; v=0; uc1=cookie21=URm48syIZx9a&cookie14=Uoe1hMPxjOUi6w%3D%3D; l=eBjjEzk7jhuLv5QABO5w-urza77O1IdfGqVzaNbMiIncC6451PpiVq-QD2wXZptRR8XVi3TB44orLwwTBUF8-PHjigu8ReWXkehHIFYC.; tfstk=cg1fBpcoLGCzgxyZgZar_N7Bm5ddaeHH5Stfl9Zya_z4EWsX2s0nTHNVrGmytg85.; isg=BOLiXeSz9mAUmeo4q5O-al-TM25EM-ZN0ycn6yx64tW8_4Z5FMeRXEo5LzsDV17l'
const query={
    current:1,
    pageSize:1,
    startTime:'20210322',
    endTime:'20210328'
}
module.exports={
    getList(){
        const {current,pageSize,startTime,endTime}=query
        return `curl 'https://rate.taobao.com/sellercenter/sellerCenterList.htm?spm=a1z0b.13405431.0.0.73e71d90WJr9J2&_tb_token_=f475beb7a10e8&_tb_token_=f475beb7a10e8&current=${current}&pageSize=${pageSize}&pureData=true&rate=-1&dateRange=${startTime}%2C${endTime}' \
        -H 'authority: rate.taobao.com' \
        -H 'pragma: no-cache' \
        -H 'cache-control: no-cache' \
        -H 'sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"' \
        -H 'accept: application/json, text/plain, */*' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36' \
        -H 'sec-fetch-site: same-origin' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://rate.taobao.com/sellercenter/listPage.htm?pagination.current=1&pagination.pageSize=20&quickFilter.rate=-1&spm=a1z0b.13405431.0.0.73e71d90WJr9J2' \
        -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
        -H 'cookie: ${COOKIE}' \
        --compressed`
    }
}