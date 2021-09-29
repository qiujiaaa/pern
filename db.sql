CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    detail TEXT NOT NULL,
    rating INT NOT NULL check (rating >= 1 and rating <= 5),
    restaurant_id BIGINT NOT NULL REFERENCES restaurants (id) ON DELETE CASCADE
);

-- INSERT INTO restaurants (name, location, price_range) values ('McDonalds', 'New York', 5);
-- INSERT INTO reviews (name, detail, rating, restaurant_id) values ('Mark', 'Amazing food!', 5, 4);