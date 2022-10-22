


// title

const Employee = require("../src/Employee");

// headings (subsection)

// section title


describe('Test Login', () => { 

  describe('Customer login', () => { 
    
    test('if correct credentials can log user into the system', () => { 
      
      // write a clear goal stmt: 

      // aaa
      // arrange , act, assert

      // replicate the env
      // define source of truth
      // create a user in our db

      // mock user input 
      // eg email: samm@sam.com
      // eg pw: 1234



      // executing the actual func
      const result = login(userEmailInput, userPasswordInput)

      // assert
      // expect result === true

    
    });

    

  })

})


describe('Test Employee Class', () => { 
  

  test('getId should give me the correct ID', () => {
    // arrange
    const actualId = 123;
    const employee = new Employee(actualId, 'aa', 'bb');

    // act
    const id = employee.getId()

    // assert
    expect(id).toBe(actualId);
  })


});




// happy path testing


// sad path (4 -5x test)














// unit  -- fast
// if we make sure all the unit (ie func) are working
// that means our app should work?



// feature -- not so fast
// login
// checking provided email exist
// check pass
// create a login session
// send error


// end 2 end -- test UI  -- very hard
// write a robot \
// visit webpage
// click on login button
// 




// code coverage
// percentage on how much has been tested

// 60%

// ecommerce

// 1000 hrs

// 30-40% 


