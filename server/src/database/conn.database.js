import mysql from "mysql2/promise"

const connect=async()=>
{
    try {
        
const conn=await mysql.createPool({
    host: `${process.env.HOST_NAME}`,
    user: `${process.env.USER}`,
    password: "",
    database: `${process.env.DATABASE}`
})
return conn
    } catch (error) {
        console.log("error in connecting to db",error);
    }

}

export default connect