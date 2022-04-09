
CREATE TABLE   IF NOT  EXISTS Makes(
  make_id SERIAL PRIMARY KEY,
  name TEXT ,
  origin TEXT
);
CREATE TABLE  IF NOT  EXISTS Vehicles(
  vehicle_id SERIAL PRIMARY KEY,
  make INT NOT NULL REFERENCES Makes (make_id),
  model TEXT NOT NULL,
  engine TEXT NOT NULL,
  color TEXT NOT NULL,
  license_plate_number TEXT,
  drive  INT NOT NULL
);
INSERT INTO Makes VALUES (DEFAULT, 'TELSA', 'American');
INSERT INTO Makes VALUES (DEFAULT, 'FORD', 'American');
INSERT INTO Vehicles VALUES (DEFAULT, 1,  '3', 'V12', 'GREEN' ,' 254PRZ1', '4');
INSERT INTO Vehicles VALUES (DEFAULT,  2,  'mustang','V12' ,'GRAY', ' 247PRX3', '4');

