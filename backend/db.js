import mongoose from "mongoose";

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

// create model for schema
const User = mongoose.model('User', userSchema);

module.exports = { User }