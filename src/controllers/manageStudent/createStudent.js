
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

    // console.log(req.body);

    return send(res,RESPONSE.SUCESSS);
    // await studentModel.create({
    //   name,
    //   email,
    //   rollno,
    // });
  } catch (error) {
    console.log(error);
  }
});
