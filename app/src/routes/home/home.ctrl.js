//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

const users= {
    id : ["kids83", "홍길동", "김팀장"],
    psword : ["1234","1234","123456"],
}


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


        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success:true,
                });
            }

        }  

        return res.json({
            success: false,
            msg: "로그인에 실패 하셨습니다.",
        });

    },
}


module.exports = {
    output,
    process,
};   