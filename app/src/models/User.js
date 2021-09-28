//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id);
        // console.log(a);
        if(id ){
            if(id === body.id && psword === body.psword){
                return{ success: true } ;
            }
            return{ success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return{ success: false, msg : "존재하지 않는 아이디 입니다."};

    }
}

module.exports = User;
