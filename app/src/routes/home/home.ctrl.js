//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
          psword = req.body.psword;
        
        // console.log(UserStorage.getUsers("id","psword", "name"));
        const users = UserStorage.getUsers("id","psword");

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }

        }  
        response.success = false ;
        response.msg = "로그인에 실패 하셨습니다."
        return res.json(response);

    },
};


module.exports = {
    output,
    process,
};   