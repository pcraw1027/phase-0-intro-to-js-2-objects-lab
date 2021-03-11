// Write your solution in this file!
let employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = Object.assign({},employee,{[key]:value})
    return newObj
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newObj = Object.assign({},employee[key])
    delete newObj[key]
    return newObj
  }
  
  function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }