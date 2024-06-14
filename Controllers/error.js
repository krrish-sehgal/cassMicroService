const express = require("express");

exports.get404 = (req, res, next) => {
  res.render("error", {
    pageTitle: "Login",
  });
};
