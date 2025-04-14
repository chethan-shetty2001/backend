export const send=(res,resData,data={})=>{

    const{code,message}=resData;

    return res.send({
        responseCode: code,
        responsemessage: message,
        responseData: data,
    });
} ;


export const setErrMsg=(resData,parameter)=>{
    return{
        code:resData.code,
        message:parameter + resData.message,
    };
};