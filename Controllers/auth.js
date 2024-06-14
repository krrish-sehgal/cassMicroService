const express = require("express");

exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "Login",
  });
};
exports.getSignUp = (req, res, next) => {
  res.render("signup", {
    pageTitle: "SignUp",
  });
};
