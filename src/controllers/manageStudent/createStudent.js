
import { Router } from "express";
import studentModel from "../../modules/studentModel.js";
import { send, setErrMsg } from "../../helper/responseHelper.js";
import{RESPONSE} from "../../config/global.js";
const router = Router();

export default router.post("/", async (req, res) => {
  try {
    const { name, email, rollno } = req.body;

    if(!name || name==undefined) {
      return send(res,setErrMsg(RESPONSE.MANDATORY,"name"));
    //   return res.send({code: "201",message: "name is mandatory"});
    }
    if(!email || email==undefined) {
      return send(res,setErrMsg(RESPONSE.MANDATORY,"email"));
    }
    if(!rollno || rollno==undefined) {
      return send(res,setErrMsg(RESPONSE.MANDATORY,"rollno"));
    }

    let emailpattern=email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

    if(!emailpattern){
      return send(res,setErrMsg(RESPONSE.INVALID,"email"));
   }

   let isRollNoExist=await studentModel.findOne({
    rollno: rollno,
   });

   if (isRollNoExist !=null){
    return send(res,setErrMsg(RESPONSE.ALRDY_EXIST,"rollno"));
   }

   let isEmailNoExist=await studentModel.findOne({
    email: email,
   });

   if (isEmailNoExist !=null){
    return send(res,setErrMsg(RESPONSE.ALRDY_EXIST,"email"));
   }

    // console.log(req.body);

    
    await studentModel.create({
      name:name,
      email:email,
      rollno:rollno,
    });
    return send(res,RESPONSE.SUCESSS);
  } catch (error) {
    console.log(error);
    return send(res,RESPONSE.UNKNOWN_ERR);
  }
});
