UPDATE products
SET name = ${name}
WHERE id = ${id};

UPDATE products
SET price = ${price}
WHERE id = ${id};

UPDATE products
SET img = ${img}
WHERE id = ${id};

SELECT * FROM products;