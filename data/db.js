import {createPool} from 'mysql2/promise'


export const pool=createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"casitas"
})

console.log("conexion exitosa db")