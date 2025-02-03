import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000;

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.get("/", (req,res) => {
    res.send({
        "message": "hello!"
    });
});

app.listen(port, () => {
    console.log(`Test server listening on port ${port}!`);
});