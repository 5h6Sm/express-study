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

let person = {
    title : "안녕",
    writer : "임쉼",
    pw : "dudu",
    main : "안녕하세요 오늘은 날씨가 쭈아"
};
let person2 = {
    title : "hello",
    writer : "dd",
    pw : "asdf",
    main : "안녕하세요 오늘은 날씨가 별로"
};

// id, 제목, 작성자 ,임시비밀번호, 본문, 날짜
// async function createTable(id){
//     const result = await promisePool.query("CREATE TABLE post (id int primary key, title varchar(20), writer varchar(255), pw varchar(255), main text, created_at datetime)", [id]);
//     console.log(result[0]);
// }

async function findPerson(){
    const result = await promisePool.query("SELECT * FROM post");
    console.log(result[0]);
}

async function addPerson(person){
    const result = await promisePool.query("INSERT INTO post (title, writer, pw, main, created_at) VALUES (?, ?, ?, ?, sysdate())", [person.title, person.writer, person.pw, person.main]);
}

async function deletePerson(id){
    const result = await promisePool.query("DELETE FROM post WHERE id=5");
}

async function updatePerson(person, id){
    const result = await promisePool.query("UPDATE post SET title=? ,writer=? ,pw=? ,main=? WHERE id=?", [person.title, person.writer, person.pw, person.main, id]);
}
addPerson(person);
updatePerson(person2, 1);
findPerson();



