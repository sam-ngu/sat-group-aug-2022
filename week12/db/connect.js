const mysql = require('mysql2/promise');



function connect(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_cms_hw'
  });
}
module.exports = {
  connect,
}