const express = require('express')
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: "Igor",
        surname: "Rodrigues",
        age: 18
    }
    const userAuth = true 
    
    res.render('home', {user: user, userAuth})
})

app.listen(3000, () => {
    console.log("App rodando")
})