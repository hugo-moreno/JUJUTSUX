const express = require('express')
const {body, validationResult} = require('express-validator')
const db = require('./repository/repopersonajes')
const app = express()
const port = 3000

app.use(express.json());

app.get ('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/personajes', async(req, res) => {
  let Pers = await db.findAll()
  res.status(200).json(Pers)
})

const nameValidator = () => body('name').trim().notEmpty()
const ageValidator = () => body('age').trim().notEmpty()
const genderValidator = () => body('gender').trim().notEmpty()
const speciesValidator = () => body('species', 'this field is required').trim().notEmpty()


app.post('/personajes', nameValidator(), ageValidator(), genderValidator(), speciesValidator(), async (req, res) =>{
  const result = validationResult(req);
  if (result.isEmpty()){
    let insertData = db.insert(req.body)
    res.status(201).json({message : "ok" })
  } else{
    res.status(400).json({ error: result.array() });
  }
 
 
})

app.get('/personajes/:Persid', async(req, res) => {
  let persona = await db.findById(req.params.Persid)
  if (persona){
    res.status(200).json(persona)
  } else{
    res.status(404).json({message: "personaje Not Found"})
  }
  
}) 

app.delete('/personajes/:Persid', async(req, res) => {
  let persona = await db.removeById(req.params.Persid)
  if (persona){
    res.status(200).json({message : "personaje delete"})
  } else{
    res.status(404).json({message: "personaje Not Found"})
  }
  
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

