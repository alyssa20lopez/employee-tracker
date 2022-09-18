INSERT INTO department (department_name)
VALUES
    ('Customer Engineering');

SELECT * FROM department;

INSERT INTO position (title, salary, department_id)
VALUES
    ('Software Engineer', 125,000.00, 05);

SELECT * FROM position;

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES
    ('Jane', 'Doe', 150);

SELECT * FROM employee;