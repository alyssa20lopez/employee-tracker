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

const init = () => {
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
  }).then((answers) => {
    switch (answers.choice) {
      case 'View All Employees':
        return viewAllEmployees();

      case 'Add Employee':
        return addEmployee();

      case 'Update Employee Role':
        return updateEmployee();

      case 'View All Roles':
        return viewAllRoles();

      case 'Add Role':
        return addRole();

      case 'View All Departments':
        return viewAllDepartments();

      case 'Add Department':
        return addDepartment();

      case 'Leave':
        return process.exit();
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
  prompt([
    {
      name: 'first_name',
      type: 'input',
      message: "What is the employee's first name?"
    },
    {
      name: 'last_name',
      type: 'input',
      message: "What is the employee's last name?"
    },
    {
      name: 'role_id',
      type: 'input',
      message: "What is the employee's role ID?"
    },
    {
      name: 'manager_id',
      type: 'input',
      message: "If applicable, enter employee's manager ID."
    },
  ])
    .then((input) => {
      db.query(`INSERT INTO employee SET ?`, input, (err) => {
        if (err) throw err;
        console.log(`Added ${input.first_name} ${input.last_name} to the employee database!`);
        init();
      });
    });
};

const addRole = () => {
  prompt([
    {
      name: 'title',
      type: 'input',
      message: "What is the employee's title?"
    },
    {
      name: 'salary',
      type: 'input',
      message: "What is the employee's salary?"
    },
    {
      name: 'department_id',
      type: 'input',
      message: "What is the employee's department ID?"
    }
  ])
    .then((input) => {
      db.query('INSERT INTO role SET ?', input, (err) => {
        if (err) throw err;
        console.log(`Added ${input.title} to the employee database!`);
        init();
      });
    });
};

const addDepartment = () => {
  prompt([
    {
      name: 'name',
      type: 'input',
      message: "What is the name of the new department?",
    }
  ])
    .then((input) => {
      db.query('INSERT INTO department SET ?', input, (err) => {
        if (err) throw err;
        console.log(`Added ${input.name} to the employee database!`);
        init();
      });
    });
};


const updateEmployee = () => {
  db.query('SELECT first_name, last_name, id FROM employee', (err, input) => {

    let viewEmployees = input.map(employee => ({ name: employee.first_name + " " + employee.last_name, value: employee.id }))

    prompt([
      {
        name: 'employee',
        type: 'list',
        message: "What employee would you like to update?",
        choices: viewEmployees
      },
      {
        name: 'title',
        type: 'input',
        message: "What is the employee's new role?",
      }
    ])
      .then((input) => {
        db.query(`UPDATE employee SET role_id = ${input.title} WHERE id = ${input.employee}`, (err, input) => {
          console.log(`Updated employee in database!`);
          init();
        });
      });
  });
};

init();