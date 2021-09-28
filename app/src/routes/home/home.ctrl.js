//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

const User = require("../../models/User");

const output = {

    home : (req,res) => {
        //res.send("여기는 루트입니다.");
        res.render("home/index");
    },

    login : (req,res) => {
        //res.send("여기는 루트입니다.");
        res.render("home/login");
    },

    register: (req,res) => {
        res.render("home/register")
    }

};  

const process = {
    login : (req,res) => {
     const user =   new User(req.body);
     const response = user.login();
    //  console.log(response);
     return res.json(response);
    },
    register:  (req,res) => {
        const user =   new User(req.body);
        const response = user.register();
       //  console.log(response);
        return res.json(response);
       },
};


module.exports = {
    output,
    process,
};   

