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

const approveprojects=async(req,res)=>
{
    try {
        const {id}=req.body
        console.log(id);
        
const thedb=await connect()
const sql="UPDATE projects set status=? where project_id=?";

const [result]=await thedb.query(sql,["approved",id]);

res.json("Project approved")



        } catch (error) {
        console.log("error in appriving",error);
        
    }
}

export {GetProjects,approveprojects}