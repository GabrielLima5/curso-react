const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    if (!name){
        res.status(422).json({message: 'Campo de nome é obrigatório.'})
    }

    res.status(201).json({name: name, price: price})
})

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})