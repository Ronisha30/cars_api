// Loads the data from .env and stores it to process.env
const dotenv = require('dotenv');
dotenv.config();


const Pool= require ('pg').Pool;

// Destructure keys from our local.env so our password are not stored pn github
const { PSQL_HOST, PSQL_USER, PSQL_PASS, PSQL_DB,PSQL_PORT }
= process.env;
// Create a connection to our database
const pool = new Pool({
    user:PSQL_USER,
    password: PSQL_PASS,
    database:PSQL_DB,
    host: PSQL_HOST,
    port: PSQL_PORT,

});

const getAllVehicles = (req, res) => {
    pool.query('SELECT * FROM Vehicles;')
    .then (results =>{
        res.status(200).json(results.rows);
    })
    .catch (error =>{
        // throw error;
        console.log(error)
    })
}

const getAllMakes = (req, res) => {
    pool.query('SELECT * FROM Vehicles;')
    .then (results =>{
        res.status(200).json(results.rows);
    })
    .catch (error =>{
        // throw error;
        console.log(error)
    })
}

module.exports = {
    getAllVehicles,
    getAllMakes,
}