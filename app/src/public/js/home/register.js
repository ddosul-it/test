//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

//DOM ->Document Object Model
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register)

function register (){
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
    };
    
    // console.log(req);
    console.log(req, JSON.stringify(req));

    fetch("/register", {
      method: "POST" ,        
      headers : {
         "Content-Type" : "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.success){
          location.href = "/login";
        }
        else{
            alert(res.msg);
        }
     })
     .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
     });

}

// console.log(id); 
    // console.log("hello");  
