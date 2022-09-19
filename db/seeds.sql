INSERT INTO department (name)
VALUES
    ('Customer Engineering'),
    ('Management'),
    ('Human Resources'),
    ('Finance'),
    ('Engineering');
   

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 125,000.00, 020),
    ('Account Manager', 200,000.00, 010),
    ('Financial Analyst', 130,000.00, 030),
    ('Internal Auditor', 170,000.00, 031),
    ('Technical Solutions Engineer', 167,000.00, 022);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Doe', 150, null),
    ('Sarah', 'Love', 150, null),
    ('Aaron', 'Applewood', 150, null),
    ('Richard', 'Stewart', 150, null),
    ('Salem', 'Price', 150, null);

SELECT * FROM employee;