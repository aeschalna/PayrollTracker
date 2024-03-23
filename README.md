# Employee Payroll Tracker Starter Code
// My Code:
const collectEmployees = function () {
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

const displayAverageSalary = function (employeesArray) {

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

const getRandomEmployee = function (employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log("Random Employee: ");
  console.log(`First Name: ${randomEmployee.firstName}`);
  console.log(`Last Name: ${randomEmployee.lastName}`);
  console.log(`Salary: $${randomEmployee.salary}`);

  return;
};
