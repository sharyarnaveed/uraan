import multer from "multer";

const up = multer({ dest: "public/" });

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        if(file.mimetype=="image/jpeg"||file.mimetype=="image/png"||file.mimetype=="image/jpg")
        {
           
            cb(null,"./public")

        }
        else{
            console.log("wrong formate");
            return null
        }

    },
    filename:function(req,file,cb){

        cb(null, Date.now() + '-' + file.originalname);
       
    }
})



export const upload=multer({storage:storage})