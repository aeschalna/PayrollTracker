// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let continueAdding = true;

  while (continueAdding) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salaryInput = prompt("Enter employee's salary:");
    let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);

    employees.push({ firstName, lastName, salary });

    let addAnother = prompt("Add another employee?");
    continueAdding = addAnother === 'yes';
  }
  displayEmployees(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let employeeCount = employeesArray.length;

  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = employeeCount === 0 ? 0 : totalSalary / employeeCount;

  if (employeeCount === 0) {
    console.log("No values available.");
    return;
  }

  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log("Random Employee: ");
  console.log(`First Name: ${randomEmployee.firstName}`);
  console.log(`Last Name: ${randomEmployee.lastName}`);
  console.log(`Salary: $${randomEmployee.salary}`);

  return;
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  console.log(employeesArray);
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
