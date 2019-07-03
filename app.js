const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.urlencoded());

app.get('/',(req,res) =>{
    res.render('index');
})

app.post('/',(req,res)=>{
    let name = req.body.name;
    res.send(`<h1>Hola ${name}!</h1>`)
})


app.listen(3000,()=> console.log("Listening on port 3000"))