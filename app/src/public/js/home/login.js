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
    
    // console.log(req);
    // console.log(req, JSON.stringify(req));

    fetch("/login", {
      method: "POST" ,        
      headers : {
         "Content-Type" : "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.success){
          location.href = "/";
        }
        else{
                alert(res.msg);
        }
     })
     .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
     });

}

// console.log(id); 
    // console.log("hello");  
