const express = require('express');
const { Schema, default: mongoose } = require('mongoose');
const validator = require('validator');

const UsersSchema = mongoose.Schema({
    firstName: {
        type: String,
        validate: {
            validator: (value) => {
                let isName = false;
                const nameRgx = /^[a-zA-Z ]+$/.test(value)
                if (nameRgx) {
                    return isName = true;
                } else {
                    return isName = false;

                }
            },
            message: "Name is not acceptable"
        },
        required: [true, "User name is required!"],
        trim: true,
        maxLength: [100, "Name is too large"],
    },
    lastName: {
        type: String,
        validate: [validator.isString, "not acceptable!"],
        required: [true, "User name is required!"],
        trim: true,
        maxLength: [100, "Name is too large"],
        validate: {
            validator: (value) => {
                let isName = false;
                const nameRgx = /^[a-zA-Z ]+$/.test(value)
                if (nameRgx) {
                    return isName = true;
                } else {
                    return isName = false;

                }
            },
            message: "Name is not acceptable"
        },
    },
    email: {
        type: String,
        required: [true, "You should enter the email of user!"],
        trim: true,
        lowercase: true,
        // unique: [true, "Email must be unique!"],
        validate: [validator.isEmail, 'Please provide a valid email!']

    },
    password: {
        type: String,
        required: true
    }
    ,
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid phone number",
        }
    },

    imgUrl: {
        type: String,
        validate: [validator.isURL, 'Please provide a valid imgUrl!'],
    },
    role: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: {
            values: ["admin", "user", "manager", "employee"],
            message: "{VALUE} is not acceptable!"
        }
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"],
    },
    term: {
        type: Boolean,
    }

}, {
    timestamps: true
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = Users;