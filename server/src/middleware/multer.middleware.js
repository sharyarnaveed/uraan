import multer from "multer";

const up = multer({ dest: "public/" });

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
        console.log(file.originalname);
    }
})

console.log(storage);

export const upload=multer({storage})