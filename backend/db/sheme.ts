import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    currentID: {
        type: Number,
        required: false
    },
    id: {
        type: Number,
        required: true
    },
    info: {
        name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: false,
        },
        age: {
            type: Number,
            minLength: 1,
            maxLength: 3,
            required: false
        },
    },
    hash: {
        type: String,
        length: 32,
        required: true
    },
    auth: {
        email: {
            type: String,
            minLength: 5,
            maxLength: 30,
            required: true
        },
        login: {
            type: String,
            minLength: 3,
            maxLength: 30,
            required: false
        },
        password: {
            type: String,
            length: 32,
            required: true
        },
    },

    ts_su: {
        type: Number,
        required: true
    },
});

export default mongoose.model('user', userSchema)