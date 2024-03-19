const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.DATABASE_LINK);

const { Schema } = mongoose;

// create a user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 5,
        maxLength: 25
    },

    password: {
        type: String,
        required: true,
        minLength: 6
    },

    firstName: {
        type: String,
        required: true,
        maxLength: 20
    },

    lastName: {
        type: String,
        required: true,
        maxLength: 20
    }
})

// create account schema
const accountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, //Reference to User modal
        ref: 'User',
        required: true
    },

    balance: {
        type: Number,
        required: true
    }
})

// create account model for schema
const Account = mongoose.model('Account', accountSchema)
// create model for schema
const User = mongoose.model('User', userSchema);

module.exports = { User, Account }