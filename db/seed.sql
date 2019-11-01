--CREATE TABLE
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INTEGER, 
img TEXT
);

--DUMMY DATA
INSERT INTO products (name, price, img)
VALUES
('hot dog', 1, 'img 1'),
('pizza', 2, 'img 2'),
('ramen', 3, 'img 3');

