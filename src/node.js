const path = require('path')
const express = require('express')


const app = express()
const staticDirPath = path.join(__dirname, '../public/')


const port = process.env.PORT || 3000
// app.set('view engine', 'hbs')
app.use(express.static(staticDirPath))

app.get('/404', (req, res) => {

    res.render('index', {
        title: 'Morgage Calculator',
        name: 'Ruan Pienaar'
    })
})


app.listen(port, () => {
    console.log('server is running on port ' + port)
})