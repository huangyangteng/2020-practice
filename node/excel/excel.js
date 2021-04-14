const ExcelJS = require('exceljs');
const workbook=new ExcelJS.Workbook()
const worksheet = workbook.addWorksheet('差评',{
  properties:{
    defaultRowHeight:15,
  }
});

worksheet.columns = [
    { header: '时间', key: 'date', width: 20 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '数量', key: 'num', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '账号', key: 'userName', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '评论', key: 'content', width: 35, style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } } },
    { header: '追评', key: 'addContent', width: 30 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '图片', key: 'media', width: 35 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '品种', key: 'variety', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '原因', key: 'reason', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '处理进度', key: 'process', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
    { header: '备注', key: 'note', width: 15 ,style: { alignment:{ wrapText: true, vertical: 'top', horizontal: 'left' } }},
  ];
const ws=workbook.getWorksheet()
const handleExcel= (list)=>{
  list.forEach( (item,index)=>{
    // 添加行
    worksheet.addRow(item)
    // 添加图片
    item.imgs.forEach((img,imgIndex)=>{
      const tmp=workbook.addImage({base64:img,extension:'jpg'})
      worksheet.addImage(tmp, {
        tl: { col: 5+imgIndex*0.3, row: 1+index},
        ext: { width: 100, height: 40 },
        editAs: 'undefined'
      });
    })
  })
 
  workbook.xlsx.writeFile('3.29-4.04.xlsx');
}



module.exports={
  handleExcel
}