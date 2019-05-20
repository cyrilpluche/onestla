const express = require('express');
const router = express.Router();

const User = require('../models').User

router.get('/login', (req, res, next) => {
    let usr = {
        firstname: 'Cyril',
        lastname: 'Pluche',
        dateOfBirth: 1996,
        status: 0,
        email: 'pluche.cyril@gmail.com',
        passsword: 'caca'

    }
    User.create(usr, (err, usr) => {
        if (err) {
            res.status(400).send({ error: err.message });
        }
        else {
            res.send('authentication login success');
        }
    })
});

router.get('/get_all', (req, res, next) => {
    User.find({}, (err, usr) => {
        if (err) {
            console.log(err)
            res.send('authentication login fail');
        }
        else {
            res.send(usr);
        }
    })
});

module.exports = router;
