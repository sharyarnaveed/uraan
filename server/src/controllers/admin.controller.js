import  jwt  from "jsonwebtoken";
import connect from "../database/conn.database.js";
import bcrypt from "bcryptjs";

const adminsignin = async (req, res) => {
  try {
    const TheDb = await connect();
    console.log(req.body);
    const { adminemail, adminpassword } = req.body;

    const sql = "SELECT * from admin where admin_email=?";
    const [rows] = await TheDb.query(sql, [adminemail]);
if(rows.length>0)
{
    console.log(rows[0].admin_password);

    const isMatch = await bcrypt.compare(adminpassword, rows[0].admin_password);

    console.log(isMatch);
    if (!isMatch) {
      return res.json({
        message: "Invalid Credentials",
        success: false,
      });
    }
const user_id=rows[0].admin_id


const accessToken=await jwt.sign(
  {id:user_id},
  process.env.ACCESS_TOKEN,
  {expiresIn:process.env.ACCESS_TIME}
)

const refreshToken=await jwt.sign(
  {id:user_id},
  process.env.REFRESH_TOKEN,
  {expiresIn:process.env.REFRESH_TIME}
)

const options={
  httpOnly:true,
  secure:true,
  sameSite:"strict",
  maxAge:7*24*60*60*1000

}

res
.cookie("accessToken",accessToken,options)
.cookie("refreshToken",refreshToken,options)
   
return res.json({
  message: "Login Success",
  success: true,

});  


}

  } catch (error) {
    console.log("error in signin", error);
  }
  
};

export { adminsignin };
