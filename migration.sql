DROP TABLE IF EXISTS gyms CASCADE;
DROP TABLE IF EXISTS bros;

CREATE TABLE gyms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(15),
    address TEXT
    );

CREATE TABLE bros (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    address TEXT,
    email TEXT,
    gym_id INTEGER REFERENCES gyms (id)
    );

CREATE TABLE gym_bros (
    bro_id INTEGER REFERENCES bros(id),
    gym_id INTEGER REFERENCES gyms(id)
);


INSERT INTO gyms (name, address) VALUES ('Chads House', '420 Strongbeach Blvd');
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Rex', 'Einsenhower', '123 Purple Avenue', 'rexyboy@hothoo.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Zamir', 'Dubai', '444 Rogers Street', 'ilikesocks@youtube.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Wilson', 'Apricot', '15 Muroc Lane', 'wewillwewillrockyou@tv.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Eric', 'Balogne', '9921 City Drive', 'jamesdough@apple.net', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Tevo', 'Bootsmith', '8813 Lakenheath Lane', 'yoooohalo@gmoney.org', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('John', 'Welle', '6652 Prescott Drive', 'breadmaker@gmail.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Pita', 'Chips', '1111 Ralph Avenue', 'whereishummus@us.af.mil', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Scott', 'Steve', '661 Orange Avenue', 'Steveyscoot@yahoo.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Sasha', 'West', '881 Beverly Street', 'fishslayer@youtube.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Emmerson', 'Boolean', '919 Fire Way', 'arson@tv.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Klint', 'Sheesh', '101 Town Square Drive', 'sheeshinator@apple.net', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Lenard', 'Skistin', '404 Grass Lane', 'valorantgamer122@gmoney.org', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Robert', 'Ezpetra', '662 Sandwich Lane', 'wafflehuse@gmail.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Hans', 'Marlen', '777 Lucky Way', 'unclassified@us.af.mil', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Daniel', 'Regal', '412 Banana Street', '@hothoo.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Ecyce', 'Headache', '305 Fever Street', 'medicineisnice@youtube.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Chris', 'Wallit', '15 Driftwood Drive', 'Chrisdrifts@tv.com', 1);
INSERT INTO bros (firstname, lastname, address, email, gym_id) VALUES ('Victor', 'Harody', '671 Park Way', 'ipwnnoobs@apple.net', 1);

