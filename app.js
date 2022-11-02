const express = require('express')
const app = express()
const PORT = 3000

let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render(
    '<h1><%=people.join(", "); %></h1>', {people:people});
console.log(html)

console.log(__dirname)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

//TODO : "/person"로 접근시 person에 저장된 내용 전부 json으로 반환해주기

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    database : 'mydatabase',
    password : '1234'
});


app.get('/persons', (req, res) => {
    connection.execute(
        "SELECT * FROM person",
        function(err, results, fields) {
            res.json(results) //객체가 담겨있다제 그대로 배열상태로~~
        }
    )
})

// app.get('/', (req, res) => {
//     const name = "John"
//     let html = "";
//     html += `<h1>Hello ${name}</h1>` 
//     html += `<p>Paragraph</p>`
//   res.send(html)
// })

// TODO  : 주소 적당히 하나 만들어서 주소에 적합한 데이터를 json 형식으로 반환하게 하기

app.get('/go_home', (req, res) => {
    res.json({starting_point : "서울", destination : "양구"})
    res.json({name : '홍길동'})
})

app.get('/json_test',(req,res) => {
    //res.send(`{name:'홍길동', age : 20})
    res.json({name:'홍길동', age : 20})
})

app.get('/ejs_test', (req, res) => {
    res.render('hello.html', {name:'홍길동', age : 20})
})


app.listen(PORT, () => {
    console.log(`서버 작동 중! (포트번호 : ${PORT})`)
})