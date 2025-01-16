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

    return res.json({
      message: "Login Successfull",
      success: true,
    });
}
   
return res.json({
    message:"Invalid Credentials",
    success:false
})



  } catch (error) {
    console.log("error in signin", error);
  }
};

export { adminsignin };
