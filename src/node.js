const path = require('path')
const express = require('express')

const app = express()
const port = (process.env.PORT || 3000)

const staticDirPath = path.join(__dirname, '../public/')
app.use(express.static(staticDirPath))

app.get('', (req, res) => {

    res.render('index', {
        title: 'Morgage Calculator',
        name: 'Ruan Pienaar'
    })
})

app.listen(port, () => {
    console.log('server is running on port ' + port)
})