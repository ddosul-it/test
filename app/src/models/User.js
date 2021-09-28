//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);
        // console.log(a);
        if(id ){
            if(id === client.id && psword === client.psword){
                return{ success: true } ;
            }
            return{ success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return{ success: false, msg : "존재하지 않는 아이디 입니다."};

    }

    register(){
        const client = this.body;
        const respnse = UserStorage.save(client);
        return respnse;
    }
}

module.exports = User;
