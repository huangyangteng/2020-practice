
const COOKIE='miniDialog=true; thw=cn; _fbp=fb.1.1610614714506.115501406; t=69015bc6ecfbdb5769dc4390f2b6983a; _bl_uid=qnkdem01mgh36knb1myXzv75dCI5; miniDialog=true; cookie2=13ffba7b752b6163ae2b1aab2c84439d; _tb_token_=f475beb7a10e8; _samesite_flag_=true; xlly_s=1; unb=2207417809129; sn=%E9%82%B1%E4%BA%9A%E6%95%8F%3A%E5%B0%8F%E9%B1%BC; csg=0d3afb4e; skt=62d67377dd776e4f; _cc_=UtASsssmfA%3D%3D; cna=4VPaF7Y72k4CAbaVoN5zSrJB; _m_h5_tk=9ff6048a0598648cfbdc49c4a5c6abe8_1616684851493; _m_h5_tk_enc=abbf5673c3db298a7815ea0e763f0808; v=0; uc1=cookie21=WqG3DMC9Eman&cookie14=Uoe1hMLq6RpH%2FA%3D%3D; l=eBjjEzk7jhuLvzXFBO5Bhurza77TeQAb8rNzaNbMiInca1oh1pGAkNCQpdfpRdtjgt5cMetrz0kFRREByfU3WxGc44UB8tTvJp9p8e1..; tfstk=cXjPBg0nCHfjzp-QW3tEOTt5x1vRZa_5RqJMrZYFAbbTnwLliohpn3gpgBD3OUf..; isg=BPDwKxh1ZK8hDDiubUnslKFpwbhCOdSDvQ3VHepDhssCpZFPkk02EijT_a3Fc4xb'
const query={
    current:1,
    pageSize:1
}
module.exports={
    getList(){
        const {current,pageSize}=query
        return `curl 'https://rate.taobao.com/sellercenter/sellerCenterList.htm?spm=a1z0b.13405431.0.0.73e71d90WJr9J2&_tb_token_=f475beb7a10e8&_tb_token_=f475beb7a10e8&current=${current}&pageSize=${pageSize}&pureData=true&rate=-1' \
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