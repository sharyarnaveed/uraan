import connect from "../database/conn.database.js"
import { uploadoncloud } from "../utility/cloudinary.js";




const submitform=async(req,res)=>{
const thedb=await connect()
const {projectname,projectdescription,programname,membersname,githublink}=req.body;
const img1=req.file.path;
console.log(img1);
const check=await uploadoncloud(req.file.path)
console.log(check);
try {
//     const sql=`INSERT INTO projects (project_name,project_descrp,team_members,link,img1,program_name) VALUES (?,?,?,?,?,?)`;
//     const [responce]=await thedb.query(sql,[projectname,projectdescription,membersname,githublink,img1,programname])
// console.log(responce);

} catch (error) {
    console.log("error in saving project to database",error);
}


}




export {submitform}
