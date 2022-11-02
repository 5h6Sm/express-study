const mysql = require('mysql2');

//커넥션 풀 생성
const pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    database : 'mydatabase',
    password : '1234',
    connectionLimit : 10,
    enableKeepAlive : true
});

// 풀을 프라미스 기반으로 사용
const promisePool = pool.promise();

async function findPerson(id){
    const result = await promisePool.query("SELECT * FROM person WHERE id=?", [id]);
    console.log(result[0]);
}