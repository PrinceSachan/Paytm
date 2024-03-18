const express = require('express');
const zod = require('zod')
const { User } = require('../db')
const jwt = require('jsonwebtoken')

const signUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
const router = express.Router();

router.post('signup', async(req, res) => {
    const { success } = signUpBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: 'Email already taken / Incorrect credentials'
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: 'Email already taken / Incorrect credentials'
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })

})

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    const { success } = signInBody.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            message: 'Email already taken / Incorrect credentials'
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    const userId = user._id

    if(user) {
        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET)

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: 'Error while logging in...'
    })
})

module.exports = router