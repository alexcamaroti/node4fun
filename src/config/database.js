const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    fullName VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL
)
`;

const INSERT_USER_1 = 
`
INSERT INTO users (
    fullName, 
    email,
    password
) SELECT 'Alex Camaroti', 'acamaroti@gmail.com', '123' WHERE NOT EXISTS (SELECT * FROM users WHERE email = 'acamaroti@gmail.com')
`;

const RECIPES_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    price REAL NOT NULL,
    description TEXT DEFAULT ('') NOT NULL
)
`;

const INSERT_RECIPE_1 = 
`
INSERT INTO recipes (
    name,
    price,
    description
) SELECT 'Baked Chicken', 30.0, 'Chicken covered by mayonnaise' WHERE NOT EXISTS (SELECT * FROM recipes WHERE name = 'Baked Chicken')
`;

const INSERT_RECIPE_2 = 
`
INSERT INTO recipes (
    name, 
    price,
    description
) SELECT 'Fish and Chips', 40.0, 'Salmon Fish imported from Norway and baby potatos seasoned with salt and pepper.' WHERE NOT EXISTS (SELECT * FROM recipes WHERE name = 'Fish and Chips')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USERS_SCHEMA);
    bd.run(INSERT_USER_1);
    bd.run(RECIPES_SCHEMA);
    bd.run(INSERT_RECIPE_1);
    bd.run(INSERT_RECIPE_2);

    bd.each("SELECT * FROM users", (err, users) => {
        console.log('users: ');
        console.log(users);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;