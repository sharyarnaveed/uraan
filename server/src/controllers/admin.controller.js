import connect from "../database/conn.database.js"



const adminsignin=async(req,res)=>
{
    try {
        
console.log(req.body);
const {adminemail,adminpassword}=req.body;





    } catch (error) {
        console.log("error in signin",error);
        
    }
}



export {adminsignin}