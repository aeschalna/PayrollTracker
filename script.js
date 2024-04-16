// Create variable to reference DOM elements
const addEmployeesBtn = document.getElementById('add-employees-btn');

// Declare global variables
let employees = [];

// Function to collect employee data
const collectEmployees = function () {
  // Set boolean to allow additional entries
  let continueAdding = true;

  while (continueAdding) {
    // Get user input to create and return an array of employee objects
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salaryInput = prompt("Enter employee's salary:");
    // Use isNaN to confirm => convert salaryInput to usable #
    let salary = isNaN(Number(salaryInput)) ? 0 : Number(salaryInput);
    // Push user input to DOM
    employees.push({ firstName, lastName, salary });
    // Prompt users to enter more data
    let addAnother = prompt("Add another employee?");
    // Set var equal to "true" boolean to continueAdding
    continueAdding = addAnother === 'yes';
  }
  // Call function to display inputs stored in employees array
  displayEmployees(employees);
  // Call function to display average salary
  displayAverageSalary(employees);
  // Sanity check
  console.log('==============================');
  // Call function to return randomized employee
  getRandomEmployee(employees);
  // Information stored in employees array
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // clear any starting value
  let totalSalary = 0;
  // total # of employees
  let employeeCount = employeesArray.length;
  // Loop through [employees] to calculate the salary for each
  employeesArray.forEach(employee => {
    totalSalary += employee.salary;
  });
  // Calculate average
  const averageSalary = employeeCount === 0 ? 0 : totalSalary / employeeCount;
  // Write logic if no employee data to calculate
  if (employeeCount === 0) {
    console.log("No values available.");
    return;
  }
  // Log value calculated to second decimal place
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
};

// Function to generate a random employee
const getRandomEmployee = function (employeesArray) {
  // Select a random employee using Math.random to randomize selection from employees array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  // Log values for array obj chosen
  console.log("Random Employee: ");
  console.log(`First Name: ${randomEmployee.firstName}`);
  console.log(`Last Name: ${randomEmployee.lastName}`);
  console.log(`Salary: $${randomEmployee.salary}`);
  // Stop function from running endlessly
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
