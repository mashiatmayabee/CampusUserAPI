const User = require("./../model/userModel");

exports.getAllUsers = async(req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: "Successful",
            result: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Failed",
            message: err
        });
    }
};

exports.getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "Successful",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Failed",
            message: err
        });
    }
};

exports.createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: "Successful",
            data: {
                newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed",
            message: err
        });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: "Successful",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "Failed",
            message: err
        });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "Successful",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "Failed",
            message: err
        });
    }
};