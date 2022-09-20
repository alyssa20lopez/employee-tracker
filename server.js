const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Connect to DB
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
  },
  console.log(`Connect to employees database.`)
);

// Questions
const prompt = inquirer.createPromptModule();

const landing = () => {
  prompt({
    name: 'choice',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'Add Employee',
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department',
      'Leave'
    ]
  }).then((response) => {
    switch (response.landing) {
      case 'View All Employees':
        viewAllEmployees();
        break;

      case 'Add Employee':
        addEmployee();
        break;

      case 'Update Employee Role':
        updateEmployee();
        break;

      case 'View All Roles':
        viewAllRoles();
        break;

      case 'Add Role':
        addRole();
        break;

      case 'View All Departments':
        viewAllDepartments();
        break;

      case 'Add Department':
        addDepartment();
        break;

      case 'Leave':
        connection.end();
        break;
    }
  });
};

const viewAllEmployees = () => {
  db.query('SELECT * FROM employee', (err, employee) => {
    if (err) throw err;
    console.table(employee);
    init();
  });

};
const viewAllRoles = () => {
  db.query('SELECT * FROM role', (err, role) => {
    if (err) throw err;
    console.table(role);
    init();
  });
};
const viewAllDepartments = () => {
  db.query('SELECT * FROM department', (err, department) => {
    if (err) throw err;
    console.table(department);
    init();
  });
};

const addEmployee = () => {
  prompt({
    name: 'last_name',
    type: 'input',
    message: "What is the employee's lastname?",
  })
  .then((input) => {
    db.query('INSERT INTO employee SET ?', input, (err) => {
      if (err) throw err;
      console.log(`Saved ${input.last_name}`);
      init();
    });
  });
};

const addRole = () => {
  prompt({
    name: 'title',
    type: 'input',
    message: "What is the employee's role?",
  })
  .then((input) => {
    db.query('INSERT INTO role SET ?', input, (err) => {
      if (err) throw err;
      console.log(`Saved ${input.title}`);
      init();
    });
  });
};

const addDepartment = () => {
  prompt({
    name: 'name',
    type: 'input',
    message: "What department does the employee belong to?",
  })
  .then((input) => {
    db.query('INSERT INTO department SET ?', input, (err) => {
      if (err) throw err;
      console.log(`Saved ${input.name}`);
      init();
    });
  });
};