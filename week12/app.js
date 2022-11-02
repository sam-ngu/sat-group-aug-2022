const inquirer = require("inquirer");
const { getDepartment, createDepartment } = require("./operations/department");



function askQuestion(){

  return inquirer.prompt([
    {
      message: 'What would you like to do',
      name: 'operation',
      type: 'list',
      choices: [
        'view all department',
        'create a department',
        /// ....
        'exit',
      ]
    },
    // for create a depart
    {
      message: 'What is the department',
      name: 'department_name',
      type: 'input',
      when: function(ans){
        return ans.operation === 'create a department';
      }

    }
  ]).then(async (res) => {

    if(res.operation === 'view all department'){
      const departments = await getDepartment();

      console.table(departments);

    } else if (res.operation === 'create a department'){
      await createDepartment(res.department_name)
    }else if(res.operation === 'exit'){
      console.log('done');
      process.exit(0);
    }
    else{
      // unknown operation
      throw new Error('what are you doin?')
    }

    return askQuestion();

    
  })
}


askQuestion();
// view all depart


// create a dept


// 


// view all roles, 

// view all employees, 
//  add a role, 

// add an employee, 
// update an employee role
// exit



