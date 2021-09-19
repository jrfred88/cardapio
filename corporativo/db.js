//db.js
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@172.17.0.2:3306/emporio");
    console.log("Conectou no MySQL!")
    global.connection = connection;
    return connection;

}
connect();

async function selectCustomers(){
    const conn = await connect();
    return await conn.query('SELECT * FROM usuarios;');
}

module.exports = {selectCustomers}
