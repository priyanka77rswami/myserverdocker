const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host : '172.18.5.41',
        user : 'root',
        password : 'manager',
        database : 'mydb',
        port :'9099'
    })
    connection.connect()
    return connection
}

module.exports = {
    connect : connect
}