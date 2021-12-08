const express = require("express");
const bcrypt = require("bcryptjs");


const router = express.Router()

router.route("/").get((req, res) => {
    res.status(200).json({location: "users root"})
})

module.exports = router;