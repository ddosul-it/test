//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

//DOM ->Document Object Model
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)

function login (){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log(req);
}

    //fetch();

    // console.log(id); 
    // console.log("hello");  
    