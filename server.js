const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Connect to DB
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connect to company_db database.`)
);

app.get('/', (req, res) => {
  // Query database
  db.query('SELECT * FROM department', function (err, results) {
    if (err) return console.log (err);
    console.log(results);
    res.json(results);
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
