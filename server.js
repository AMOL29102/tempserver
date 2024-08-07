import express from "express"
import cors from "cors"


const app = express();
app.use(cors());
const port = 9000;


app.use("/",(req,res)=>{
    res.json({message: "Hello server!!" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});



app.listen(9000, () => {
    console.log(`Starting the server at : ${port}`);
});