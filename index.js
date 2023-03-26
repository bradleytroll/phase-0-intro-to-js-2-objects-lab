const employee = { 
    name: "Bradley",
    streetAddress: "123 Main Street" }; 

    // pass test 1 //

function nondestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
      
    newObj[key] = value;
      
    return newObj;
      }

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const UpdatedEmployee = nondestructivelyUpdateObject(employee, key, value);
    return UpdatedEmployee;
}
const updatedEmplyee = updateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway" );

// pass test 2 //

function destructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
      
    newObj[key] = value;
      
    return newObj;
      }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    if (key === "name") {
        employee.street = "12 Broadway"
    }
    return obj
}
const updatedEmplyee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "12 Broadway" );

// pass test 3 //

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  }
  
  const updatedEmployee3 = deleteFromEmployeeByKey(employee, "Sam");
  
// pass test 4 //

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
 const updatedEmployee4 = destructivelyDeleteFromEmployeeByKey(employee["Sam"]);
    
