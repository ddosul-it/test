//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

class UserStorage{
   static #users= {  //#으로 은닉화 한다
        id : ["kids83", "홍길동", "김팀장"],
        psword : ["1234","1234","123456"],
        name : ["홍길동","홍길동1","홍길동2"],
    };
    
    static getUsers(...fields ){
        
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            // console.log(newUsers, field);
        
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        }
        return newUsers ;
        
        }, {});
        
        // console.log(newUsers);
        return newUsers ;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;

    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        // console.log(users);
        return { success : true};
         
    }
}


module.exports = UserStorage ;

