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
      'Quit'
    ]
  }).then((response) => {
    switch (response.landing) {
      case 'View All Employees':
        viewAllEmployees();
        break;
    }
  });
};






















db.query('SELECT * FROM department', (err, department) => {
  if (err) throw err;
  console.table(department);
  init();
});

// Add Choices

const addLastname = () => {
  db.query('SELECT last_name FROM employee', (err) => {
    if (err) throw err;
    console.table(employee);
    init();
  });
};

const addLastname = () => {
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
      })
    });
};