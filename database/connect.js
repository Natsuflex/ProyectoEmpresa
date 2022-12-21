/*Probando la conexion de error de Error: spawn java ENOENT*/

/*const SyBase = require('node-sybase');

const { spawn } = require('child_process');
const child = spawn('dir', [], {shell: true});
const sybase = new SyBase([
{
name: 'productoempresa',
host: 'localhost',
port: '5001',
dbname: 'productoempresa',
username: 'DBA',
password: 'SQL'
}
]);


exports.connect = function (query) {

sybase.DBPools.main.execute(
query
).then(function(res){
console.log("BD Conectada ✔"+ res);
})
.catch(function(err){
console.log("in error--->"+err);
});
}*/


/*Error: spawn java ENOENT*/
/*
const Sybase = require('sybase'),
    db = new Sybase('localhost', '5001', 'productoempresa', 'DBA', 'SQL');
 
db.connect(function (err) {
  if (err) return console.log(err);
  
  db.query('select * from productos', function (err, data) {
    if (err) console.log(err);
    
    console.log(data);
 
    db.disconnect();
 
  });
});*/