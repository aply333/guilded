const express = require("express");
const bcrypt = require("bcryptjs");
const tokenGenerate = require("../authentication/tokenGenerate");
const  user_models = require("../database/models/users_models");

const router = express.Router()

router.route("/").get((req, res) => {
    res.status(200).json({location: "users root"})
})

router.route("/login").post(async (req, res)=>{
    try{
        const { email, password } = req.body;
        const user = await user_models.findUser(email);
        const hashCheck = await bcrypt.compare(password, user.hash);
        if(user){
            if(hashCheck){
                const token = tokenGenerate(user)
                res.status(200).json({
                    user:{
                        user_id: user.user_id,
                        tag: user.tag,
                        name: user.name,
                        email: user.email
                    },
                    token: token
                })
            }else{
                res.status(401).json({error: "Invalid password."})
            }
        }else{
            res.status(401).json({error: "No user found."})
        }
    }catch(err){
        res.status(401).json({
            error: "Route level error at login.",
            details: err
        })
    }
})

router.route("/register").post(async (req, res)=> {
    let newUserData = req.body;
    let hash = await bcrypt.hash(newUserData.password, 12);
    let newUser = {
        tag: newUserData.tag,
        name: newUserData.name,
        email: newUserData.email,
        hash: hash
    }
    try{
        await user_models.registerUser(newUser);
        const user = await user_models.findUser(newUser.email);
        res.status(200).json(user)
    }catch(err){
        res.status(401).json({
            error: "Failed to register new user.",
            details: err
        })
    }
})


module.exports = router;