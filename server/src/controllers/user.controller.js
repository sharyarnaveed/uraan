import connect from "../database/conn.database.js"




const submitform=async(req,res)=>{

const {projectname,projectdescription,programname,membersname}=req.body;
console.log(projectname);

}




export {submitform}
