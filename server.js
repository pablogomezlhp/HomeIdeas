// express para criar e configurar servidor
const express = require("express");
const server = express();
const db = require("./db");



// configurar arquivos estaticos
server.use(express.static("public"));

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true }));


//configuracao do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //Boolean
})


//criei uma rota /
//e capturo o pedido do cliente
server.get("/", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {


        const reversedIdeas = [...rows].reverse();

        let lastIdeas = [];
        for (let idea of reversedIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }

        return res.render("index.html", { ideas: lastIdeas })
    })
})

server.get("/ideias", function (req, res) {

    db.all(`SELECT * FROM ideas`, function (err, rows) {

        const reversedIdeas = [...rows].reverse();
        return res.render("ideias.html", { ideas: reversedIdeas })
    })


})

server.post("/", function (req, res) {
    //Insert data
    const query = `INSERT INTO ideas(
        image, 
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?);`

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]
    
    db.run(query, values, function (err) {
        if (err){
        console.log(err)
        return res.send("WE CANT ADD YOUR IDEA")
        }
        
        return res.redirect("/ideias") 
    })
})
//Liguei meu servidor na porta 3000
server.listen(3000);