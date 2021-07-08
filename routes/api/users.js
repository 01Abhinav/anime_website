const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//Article Model
const User = require('../../models/user');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userByName = await User.findOne({ name });
        if (userByName) throw Error('This User Name already exists');

        const user = await User.findOne({ email });
        if (user) throw Error('This Email already exists');
    
        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');
    
        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Something went wrong hashing the password');
    
        const newUser = new User({
            name,
            email,
            password: hash
        });
    
        const savedUser = await newUser.save();
        if (!savedUser) throw Error('Something went wrong saving the user');
    
        const token = jwt.sign({ id: savedUser._id, email:savedUser.email, name:savedUser.name }, config.get('jwtSecret'), {
            expiresIn: 3600
        });

        res.header("x-auth-token", token)
            .header("access-control-expose-headers", "x-auth-token")
            .json({
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({ msg: e.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password -email');
        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;