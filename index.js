const express = require('express')
const db = require('./repository/repofile')
const app = express()
const port = 3000

var Pers = [ 

  { 

     "Nombre" : "Yuji Itadori", 

     "Edad" : 15, 

     "Altura" : 1.73, 

     "Especie" : "Humano", 

     "Genero" : "Masculino", 

     "ID" : 123, 

    "Image URL" : "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es" 

  }, 

  { 

     "Nombre" : "Satoru Gojo", 

     "Edad" : 28, 

     "Altura" : 1.90, 

     "Especie" : "Humano", 

     "Genero" : "Masculino", 

     "ID" : 254,
  
     "Image URL" : "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es" 

  }, 

  { 

     "Nombre" : "Kugisaki Nobara", 

     "Edad" : 16, 

     "Altura" :  1.60, 

     "Especie" : "Humano", 

     "Genero" : "Femenino", 

     "ID" : 458, 

     "Image URL" : "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es" 



  }, 

  { 

     "Nombre" : "Fushiguro Megumi", 

     "Edad" : 15, 

     "Altura" : 1.75, 

     "Especie" : "Humano", 

     "Genero" : "Masculino", 

     "ID" : 877,
     
     "Image URL" : "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es"


  }, 

  { 

     "Nombre" : "Okkotsu Yuta", 

     "Edad" : 17, 

     "Altura" : 1.78, 

     "Especie" : "Humano", 

     "Genero" : "Masculino", 

     "ID" : 999, 
     
     "Image URL" : "https://static.wikia.nocookie.net/jujutsu-kaisen/images/a/a2/Satoru_Gojo_-_Anime.jpg/revision/latest?cb=20201017190313&path-prefix=es" 

  }, 

] 

app.use(express.json());

app.get ('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/personajes', async(req, res) => {
  let Pers = await db.findAll()
  res.status(200).json(Pers)
})

app.post('/personajes', async (req, res) =>{
  let insertData = db.insert(req.body)
  console.log(insertData)
  res.status(201).json({message : "ok" })
})

app.get('/personajes/:Persid', async(req, res) => {
  let persona = await db.findById(req.params.Persid)
  if (persona){
    res.status(200).json(persona)
  } else{
    res.status(404).json({message: "personaje Not Found"})
  }
  

}) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

