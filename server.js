const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

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

  // Query database
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.log (err);
    console.table(results);
    res.json(results);
  });

// Questions
const prompt = inquirer.createPromptModule();

const showLastname = () => {
  db.query('SELECT last_name FROM employee', (err) => {
    if (err) throw err;
    console.table(employee);
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
    })
  });
};




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
