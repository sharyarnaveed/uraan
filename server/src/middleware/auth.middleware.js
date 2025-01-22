import jwt from "jsonwebtoken"

const verifyjwt=async(req,res,next)=>
{
    try {
        
const accessToken=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer", "");
const refreshToken = req.cookies?.refreshToken;


const generateNewAccessToken = async (userData) => {
    console.log("auth user data", userData);
    const newAccessToken = jwt.sign(
      { id: userData.id},
      process.env.ACCESS_TOKEN,
      { expiresIn: process.env.ACCESS_TIME }
    );
      // Set cookie options
      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite:'strict',
        maxAge:7*24*60*60*1000
        // Only true in production
    };

    res.cookie("accessToken", newAccessToken, cookieOptions);
    return newAccessToken;
  };

  if (!accessToken) {
    if (!refreshToken) {
      return res.status(401).json({
        message: "Unauthorized, no tokens provided",
        success: false,
      });
    }

    // // Try to verify refresh token and generate new access token
    try {
      const refreshData =await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN
      );
      console.log("refresh data", refreshData);
      await generateNewAccessToken(refreshData);

      // res.json({
      //     message:"access token generated succesfully"
      // })
      req.user = refreshData;
      return next();
    } catch (refreshError) {
      return res.status(401).json({
        message: "Invalid or expired refresh token",
        success: false,
      });
    }
  }

  if (accessToken) {
    // Case 2: Access token present
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
      console.log("auth", decoded);
      req.user = decoded;
      return next();
    } catch (accessError) {
      //     // If access token is expired and refresh token exists
      if (accessError.name === "TokenExpiredError" && refreshToken) {
        try {
          const refreshData =await jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN
          );
          await generateNewAccessToken(refreshData);

          req.user = refreshData;
          return next();
        } catch (refreshError) {
          return res.status(401).json({
            message: "Invalid or expired refresh token",
            success: false,
          });
        }
      }

      return res.status(401).json({
        message: "Unauthorized, invalid access token",
        success: false,
      });
    }
  }


  

    } catch (error) {
        console.log("error in verification",error);
        
    }
}

export {verifyjwt}