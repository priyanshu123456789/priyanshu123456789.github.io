function poof(){
    document.querySelector('button').style.opacity=0;
    document.querySelector('button').style.pointerEvents="none";
    document.querySelector('.score').style.opacity=1;
    document.querySelector('.rgbcode').style.opacity=1;
    
    select();
}
var r,g,b,m;
function check(){
     r=Math.floor(Math.random() * (255 - 0 + 1) + 0);
     g=Math.floor(Math.random() * (255 - 0 + 1) + 0);
     b=Math.floor(Math.random() * (255 - 0 + 1) + 0);

    document.querySelector(".rgbcode").innerHTML="rgb("+r+", "+g+", "+b+")";

}


function select(){
    
    m= document.querySelector(".rgbcode").innerHTML;
    var l=Math.floor(Math.random() * (3 - 1 + 1) + 1);
    var clvar = ".op"+l.toString();
    document.querySelector(clvar).style.background=m;

    if(l!=1){
        check();
        document.querySelector(".op1").style.background="rgb("+r+","+g+","+b+")";
    }
    if(l!=2){
        check();
        document.querySelector(".op2").style.background="rgb("+r+","+g+","+b+")";
    }
    if(l!=3){
        check();
        document.querySelector(".op3").style.background="rgb("+r+","+g+","+b+")";
    }
   
}
var score=0;
function click1(){
    var curcolor= document.querySelector(".op1").style.background;
    select();
    if(curcolor==m){
        score++;
        console.log("hello1");

    }
    else{
        score--;
    }
    document.querySelector(".score").innerHTML="Score: " +score;
}
function click2(){
    var curcolor= document.querySelector(".op2").style.background;
    select();
    console.log(curcolor);
    console.log(m);
    console.log(typeof(curcolor));
    console.log(typeof(m));
    if(curcolor==m){
        score++;
        console.log("hello2");
    }
    else{
        score--;
    }
    document.querySelector(".score").innerHTML="Score: " +score;
}
function click3(){
    var curcolor= document.querySelector(".op3").style.background;
    select();
    console.log(curcolor);
    console.log(m);
    console.log(typeof(curcolor));
    console.log(typeof(m));
    if(curcolor==m){
        score++;
        console.log("hello3");

    }
    else{
        score--;
    }
    document.querySelector(".score").innerHTML="Score: " +score;
    
}