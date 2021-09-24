import express from "express";

const app = express();

app.get('/', (req, res)=>{
    return res.send('Helloooo Word!');
})

app.listen(3333);