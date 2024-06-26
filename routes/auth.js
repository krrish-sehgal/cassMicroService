const express = require("express");

const router = express.Router();
const authController = require("../Controllers/auth");

router.get("/login", authController.getLogin);

// router.post("/login", authController.postLogin);

// router.post("/logout", authController.postLogOut);

router.get("/signup", authController.getSignUp);

// router.post("/signup", authController.postSignUp);

module.exports = router;
