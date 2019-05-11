//load app server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const morgan = require('morgan');
const db = require('./queries')

app.use(morgan ('short'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)


app.get('/', (req, res) => {
    res.json({
        info: 'Node.js, epxress, POSTGRESS'
    })
})

//localhose:3003
app.listen(port, () => {
    console.log('Server is up an listening on port 3003...')
});