import express from "express";
import bcrypt from "bcrypt";

//init server
const app = express();

//middlewares
app.use(express.static("public"));
app.use(express.json())//Enables sharing

//routes
//home route
app.get('/',(req,res) => {
    res.sendFile("index.html",{root : "public"})
}) 

//signup
app.get('/signup', (req,res) => {
    res.sendFile("singup.html",{root : "public"})
})

//404 route
app.get('/404', (req,res) => {
    res.sendFile("404.html", { root : "public"})
})

app.use((req, res) => {
    res.redirect('/404')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})