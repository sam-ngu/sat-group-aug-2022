const { connect } = require("../db/connect");


// view
async function getDepartment(){
  const query = "SELECT * FROM departments";

  const connection = await connect();
  
  const [rows, cols] = await connection.query(query);

  return rows;

}



// create

async function createDepartment(name){

  const query = `INSERT INTO \`departments\` (\`name\`) VALUES (?)`;

  // get mysql connection \

  // run query
  const connection = await connect();

  return connection.query(query, [name])
}


module.exports = {
  createDepartment,
  getDepartment,
}

