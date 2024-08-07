import express from "express"


const app = express();
const port = 9000;


app.use("/",(res,req)=>{
    res.json({message : "Hello server!!" })
})
app.listen(9000,()=>{
    console.log(`Starting the server at : ${port}`);
});