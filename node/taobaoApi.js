
const COOKIE='miniDialog=true; thw=cn; _fbp=fb.1.1610614714506.115501406; t=69015bc6ecfbdb5769dc4390f2b6983a; _bl_uid=qnkdem01mgh36knb1myXzv75dCI5; miniDialog=true; xlly_s=1; _cc_=UIHiLt3xSw%3D%3D; _tb_token_=f9AcNCm2bFERFIhaia8o; _samesite_flag_=true; cookie2=1ba063e41d766328654b3cc6dae851cf; unb=2207417809129; sn=%E9%82%B1%E4%BA%9A%E6%95%8F%3A%E5%B0%8F%E9%B1%BC; csg=ae211653; skt=7f2c0d3f4acaa5ad; cna=4VPaF7Y72k4CAbaVoN5zSrJB; _m_h5_tk=2dbbc11fdc8cfcec2e216d01af1282bd_1617032565962; _m_h5_tk_enc=d42ca519c9a7a555473ec3f6544cf72f; v=0; uc1=cookie21=W5iHLLyFfoaZ&cookie14=Uoe1hdEe8ZcpPQ%3D%3D; tfstk=cCsdBuOwnRHK-GJO3wUiFaO9GMtRZlEy1XOS2JpyudKqKOoRigIcDyi0ALAl3RC..; l=eBjjEzk7jhuLvRjvBO5a-urza77TBIRf1PFzaNbMiInca6O5GUiPQOCQcaDkPdtjgtfmHeKrz0kFRRnvP-zU5xGc44UB8tTvJzJ6-; isg=BJ-frtqhAzcrEgcT1mSr0eoMLvUpBPOmRkgKADHsws6ZwLxCONDc96nWglC-_cse'
const query={
    current:1,
    pageSize:100,
    startTime:'20210322',
    endTime:'20210328',
    rate:0 //-1差评  0中评
}
module.exports={
    getList(){
        const {current,pageSize,startTime,endTime,rate}=query
        return `curl 'https://rate.taobao.com/sellercenter/sellerCenterList.htm?spm=a1z0b.13405431.0.0.73e71d90WJr9J2&_tb_token_=f475beb7a10e8&_tb_token_=f475beb7a10e8&current=${current}&pageSize=${pageSize}&pureData=true&rate=${rate}&dateRange=${startTime}%2C${endTime}' \
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