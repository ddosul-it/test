//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//app.get("/", (req,res) => {
router.get("/", ctrl.home);



//app.get("/login", (req,res) => {
router.get("/login", ctrl.login);

module.exports = router ;