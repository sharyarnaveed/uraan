import connect from "../database/conn.database.js";



const projectdetails=async(req,res)=>
{
    try {
        const {id}=req.body;
        console.log(id);
        const thedb= await connect();
        const sql="SELECT * FROM PROJECTS WHERE project_id=? "
        const [result]=await thedb.query(sql,[id]);
        console.log(result);
        return res.json(result)
    } catch (error) {
        console.log("erro in getting details",error);
        
    }
}

export {projectdetails}