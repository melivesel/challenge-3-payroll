// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
    const employeesArray = [];

    let addMoreEmployees = true;

    while (addMoreEmployees) {
        const firstName = window.prompt("Enter First Name");
        const lastName = window.prompt("Enter Last Name");
        const salaryInput = window.prompt("Enter Salary");
        const salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

        employeesArray.push({ firstName, lastName, salary });

        const continueInput = window.prompt("Do you want to add another employee? Enter 'yes' to continue or 'no' to stop.");

        if (continueInput.toLowerCase() !== 'yes') {
            addMoreEmployees = false;
        }
    }


    console.log(employeesArray);
    return employeesArray;
}
// Display the average salary

const displayAverageSalary = function(employeesArray) {
    // Calculate the total salary
    let totalSalary = 0;
    employeesArray.forEach(employee => {
      totalSalary += employee.salary;
    });
  
    // Calculate the average salary
    const avgSalary = totalSalary / employeesArray.length;
  
    // Display the average salary
    console.log(`The average employee salary between our ${employeesArray.length} employees is $${avgSalary}`);
  }

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
  console.log`Congratulations to ${firstName}$${lastName}, our random drawing winner!`
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
