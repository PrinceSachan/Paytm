const express = require('express');
const router = express.Router();

const zod = require('zod')
const { User, Account } = require('../db')
const jwt = require('jsonwebtoken')
const {authMiddleware} = require('../middleware')

const signUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signUpBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: 'Email already taken / Incorrect credential'
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

    // create account when user signup
    Account.create({
        userId,
        balance: 1 + Math.random() * 100000
    })

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

const updateBody = zod.object({
    username: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/update", authMiddleware, async(req, res) => {
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message: "Error while updating"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })


    res.json({
        message: 'Update Successfully'
    })
})


router.get('/bulk', async(req, res) => {
    const filter = req.body.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            },
            lastName: {
                "regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports =  router 