// These lines make "require" available
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
//connecting to the database using Pool
const Pool = require ("pg").Pool;
//require('dotenv').config()
// const pool = new Pool({
//     host:process.env.db_host,
//     port:process.env.db_port,
//     user:process.env.db_user,
//     password:process.env.db_password,
//     database: process.env.db_database
// })
const pool = new Pool({
    
    
host:"localhost",
port:5432,
user:"postgres",
password:"18810344",
database: "hr_portal",
     })
module.exports = pool;
//export default pool ;