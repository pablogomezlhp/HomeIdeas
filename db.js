const sqlite3 =require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function(){
    //Create Table
    db.run(
        `CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    //Insert data
    const query = `INSERT INTO ideas(
        image, 
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?);`

    const values = [
        "https://image.flaticon.com/icons/svg/2760/2760180.svg",
        "Use Mask",
        "teste",
        "testestesteste", 
        "http://rocketseat.com.br"
    ]
    //db.run(query,values, function(err){
     //   if (err) return console.log(err)

      //  console.log(this)
    //})

    //Delete data from table
    //db.run(`DELETE FROM ideas WHERE id= ?`,[1], function(err){
      //  if(err) return console.log(err)

      //  console.log('Arquivo deletado')
    //})


    //Get data
    //db.all(`SELECT * FROM ideas`, function(err, rows){
     //   if(err) return console.log(err)

     //   console.log(rows)
    //})

    
});

module.exports = db