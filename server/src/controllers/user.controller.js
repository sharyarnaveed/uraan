import connect from "../database/conn.database.js"
import { validationinput } from "../utility/validateinput.js";





const submitform=async(req,res)=>{
const thedb=await connect()
const {projectname,projectdescription,programname,membersname,githublink,year}=req.body;

if(!projectname||!projectdescription||!programname||!membersname||!githublink)
{
    return res.json({
        message:"Fill All The Fields",
        success:false
    })
    
}

const theValidation=validationinput(projectname,projectdescription,membersname)

if(theValidation===false)
{
    return res.json({
        message:"Write Valid Input",
        success:false
    })
}



const img1=req.file.path;


try {
    const sql=`INSERT INTO projects (project_name,project_descrp,team_members,link,img1,program_name,year) VALUES (?,?,?,?,?,?,?)`;
    const [responce]=await thedb.query(sql,[projectname,projectdescription,membersname,githublink,img1,programname,year])
console.log(responce);
res.json({
    message:"Project Added Successfully",
    success:true
})
} catch (error) {
    console.log("error in saving project to database",error);
}


}




export {submitform}
