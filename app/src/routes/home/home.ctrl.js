//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

const output = {

    home : (req,res) => {
        //res.send("여기는 루트입니다.");
        res.render("home/index");
    },

    login : (req,res) => {
        //res.send("여기는 루트입니다.");
        res.render("home/login");
    },

};  

const process = {
    login : (req,res) => {
        console.log(req,body);
    }
}


module.exports = {
    output,
    process,
};   