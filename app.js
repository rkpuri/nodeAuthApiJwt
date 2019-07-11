const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res)=> {
    res.json({
        message: 'Welcome to auth api with token'
    })
})

app.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, data) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created',
                data
            })
        }
    });
})

app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'abc@gmail.com',
        password: 'xyz'
    }
    jwt.sign({user}, 'secretKey', (err, token) => {
        res.json({
            token
        })
    })
})

function verifyToken (req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    //Check if bearer is undefined

    if(typeof bearerHeader !== 'undefined') {
        //Split the token from Bearer
        const bearer = bearerHeader.split(' ')
        //Get token from array
        const bearerToken = bearer[1]

        //set the token
        req.token = bearerToken
        next()

    } else {
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('server started and listening at port 5000'));