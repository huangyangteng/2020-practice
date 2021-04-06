
const COOKIE='thw=cn; _fbp=fb.1.1610614714506.115501406; t=69015bc6ecfbdb5769dc4390f2b6983a; _tb_token_=dkf96cxz3LLNG0fJ3AWE; _samesite_flag_=true; cookie2=16e1efc476c4caa98f539cd806803d6d; xlly_s=1; unb=2207417809129; sn=%E9%82%B1%E4%BA%9A%E6%95%8F%3A%E5%B0%8F%E9%B1%BC; csg=65ce30bb; skt=56bd28df044bb973; _cc_=UtASsssmfA%3D%3D; cna=4VPaF7Y72k4CAbaVoN5zSrJB; _m_h5_tk=b2302d5a7f103ca730353637e0ec024a_1617604214115; _m_h5_tk_enc=e8881d160a4fa2797aaf5e5b869f998e; v=0; uc1=cookie21=Vq8l%2BKCLiYYu&cookie14=Uoe1hdTzT08jHg%3D%3D; isg=BGtrPST_j9hioNM_OmC39Z5Q-olVgH8CsoS-LN3o1qqRfIreZFJ0Urqd17wSgNf6; l=eBjjEzk7jhuLv3RYBO5Cnurza779gIRb8mFzaNbMiIncC6eAT-9tjLKQDflPdd-RJ8XcMbTp44orLwwtwFw7JPYjS4BE4teAGM1JCef..; tfstk=c9H1BpXhaqHEtNOVQctF3Lip-p2cZz1ucdasfbgxM8-WOAn1iUXzPdonowyo8k1..'
const QUERY={
    current:1,
    pageSize:100,
    startTime:'20210329',
    endTime:'20210404',
    rate:0 //-1差评  0中评
}
module.exports={
    getList(query=QUERY){
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