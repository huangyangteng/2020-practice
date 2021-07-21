const mysql=require('mysql')

// 连接配置
const cfg = {
    host: "111.229.14.189",
    user: "root",
    password: "lxhyt123.", // 修改为你的密码 database: "kaikeba" // 请确保数据库存在
    database:"eb"
};
// 创建连接对象
const conn=mysql.createConnection(cfg)

conn.connect(err=>{
    if(err)throw err
    console.log('连接成功')
})

// 创建表
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT, 
    message VARCHAR(45) NULL, 
    PRIMARY KEY (id))`;
const INSERT_SQL=`INSERT INTO test(message) VALUES(?)`
const SELECT_SQL=`SELECT * FROM test`

conn.query(CREATE_SQL,err=>{
    if(err){
        throw err
    }
    conn.query(INSERT_SQL,"hello,world",(err,result)=>{
        if(err)throw err
        console.log(result)
        
    })
})