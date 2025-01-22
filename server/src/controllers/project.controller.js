import connect from "../database/conn.database.js";



const GetProjects=async(req,res)=>
{
    try {
const thedb=await connect()

        const getprojectsql="SELECT * FROM projects where status=?";
        const [responce]=await thedb.query(getprojectsql,"undefined");

        res.json({projects:responce})



    } catch (error) {
        console.log("error in getting projects",error);
        
    }
}



export {GetProjects}