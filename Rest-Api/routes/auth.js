import express from "express";
import User from "../models/User.js"
import bcrypt from "bcrypt";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        newUser.save();
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        !user && res.status(404).send("user not found");

        const validPassword = await bcrypt.compare(password, user.password);
        !validPassword && res.status(400).send("wrong password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

export default router;