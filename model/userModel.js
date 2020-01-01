const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Give name"]
    },
    Department: {
        type: String,
        required: [true, "Give Department"]
    },
    Roll: {
        type: Number,
        required: [true, "Give roll number"]
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;