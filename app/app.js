//이크마스크립트 문법을 준수 하겠다라는 내용
"use strict"; 

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");


//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); //미들웨어 접속 use -> 미들웨어를 등록해 주는 메서드

   
module.exports = app;