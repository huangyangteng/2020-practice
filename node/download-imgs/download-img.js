const fs = require('fs');
const axios = require('axios');
const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),
  );

/* ============================================================
  Download Images in Order
============================================================ */

(async () => {
    let list=[
        "https://pic3.zhimg.com/v2-b2079f83f24a762c23eba4f4e86aec01_b.jpg",
        "https://pic3.zhimg.com/v2-60c04126ed9aea76d92491c77ee40157_b.jpg",
        "https://pica.zhimg.com/v2-bac7e0fe99cb057fe9526ef27d854ded_b.jpg",
        "https://pic4.zhimg.com/v2-8c581216ac0c635326730d9f512f4400_b.jpg",
    ]
    for(let i=0;i<list.length;i++){
        const link=list[i]
        const path='images/'+link.split('/').pop()
        await download_image(link,path);
    }
 
})();
