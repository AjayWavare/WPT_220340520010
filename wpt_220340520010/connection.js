const mysql = require('mysql2');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
	port:3306
});

let bookid=4;
let bookname='css';
let price=150;
con.query('update book set bookid=?,bookname=?,price=?where bookid=?',
[bookid,bookname,price],(err,res)=>{
    if(err){res.send('book id is not found')}
    else{
        if(res.affectrows==0){
            res.send('update success');
        }
    }
})