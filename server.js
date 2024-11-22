const express = require('express')
const actions = require('./api/routes/routes')
const db = require('./api/db')

function run() { 
    db.connect()
    app = express()
    app.use(express.json())

    app.use(express.static('public'));
    app.get('/', (req, res)=>{
        res.sendFile(__dirname + '/public/index.html')
    })

    app.use('/carros', actions)

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando na porta ${PORT}\nhttp://localhost:${PORT}`)
    })
}

module.exports = run