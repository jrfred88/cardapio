(async () => {
const db = require("./db")
console.log('SELECT * FROM usuarios;');
const usuarios = await db.selectCustomers();
console.log(usuarios);
})();