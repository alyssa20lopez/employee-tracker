USE employees;

INSERT INTO department (name)
VALUES
    ('Customer Engineering'),
    ('Management'),
    ('Human Resources'),
    ('Finance'),
    ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 125000.00, 1),
    ('Account Manager', 200000.00, 2),
    ('Resources Manager', 90000.00, 3),
    ('Internal Auditor', 170000.00, 4),
    ('Technical Solutions Engineer', 167000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Doe', 1, null),
    ('Sarah', 'Love', 2, 3),
    ('Aaron', 'Applewood', 3, 2),
    ('Richard', 'Stewart', 4, null),
    ('Salem', 'Price', 5, null);