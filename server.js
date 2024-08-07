import express from "express"
import cors from "cors"


const app = express();
app.use(cors());
const port = 9000;


app.use("/",(req,res)=>{
    res.json({message: "Hello server!!" });
});
app.listen(9000, () => {
    console.log(`Starting the server at : ${port}`);
});