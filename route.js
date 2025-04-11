import studentApiHandler from="./src/controllers/manageStudent/apiHandler.js";

const routes=(app)=>{
    app.use('/api/student', studentApiHandler);
};