const employee = {
   key1: "value",
   key2: "value",
};

o

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;
return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
 return {
     ...employee, [key]: value,
 };
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee[key];
    return employee;
}