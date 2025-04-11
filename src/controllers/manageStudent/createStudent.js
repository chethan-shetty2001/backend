import {Router} from "express";
import studentModel from "../../modules/studentModel";
const router=Router()

export default router.post("/",async(requestAnimationFrame,res)=>{
    try{
        const{name,email,rollno}=req.body;
        console.log(req.body);

        // await studentModel.create({
        //     name,
        //     email,
        //     rollno,
        // });





    }catch(error){
        console.log(error);
    }
})