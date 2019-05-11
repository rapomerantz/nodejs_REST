//load app server
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan ('short'));


app.get('/', (req, res) => {
    console.log('Responding to root route');
    res.send('hello from ROOOOt');
})

app.get('/users', (req, res) => {
    let user1 = {fistName: 'atti', lastName: 'pom'}
    let user2 = {fistName: 'corn', lastName: 'dog'}
    res.json([user1, user2]);
})

//localhose:3003
app.listen(3003, () => {
    console.log('Server is up an listening on port 3003...')
});