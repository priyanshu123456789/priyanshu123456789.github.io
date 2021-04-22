let displaysec=0;
let displaymin=0;
let displayhr=0;

var interval=null;
var status="stopped";

var reset="";

//for setting hour
function incHr(){
    alert("hello world");
    var con = document.getElementById("hr").value;
    if(con<23 && con>=0){
        var conInc =con;
        ++conInc;
    }
    else if(con==23){
        con=0;
        var conInc =con;   
    }
    document.getElementById("hr").value=conInc;
}

function decHr(){
    var con = document.getElementById("hr").value;
    if(con<=23 && con>0){
        var conDec =con;
        conDec--;
        
    }
    else  if(con<=0){
        con=23;
        var conDec =con;
    }
    document.getElementById("hr").value=conDec;
    }
}
//for setting minutes
function incMin(){
    var con = document.getElementById("min").value;
    if(con<59 && con>=0){
        var conInc =con;
        ++conInc;
    }
    else if(con==59){
        con=0;
        var conInc =con;   
    }
    document.getElementById("min").value=conInc;
}

function decMin(){
    var con = document.getElementById("min").value;
   
    if(con<=59 && con>0){
        var conDec =con;
        conDec--;
        
    }
    else  if(con<=0){
        con=59;
        var conDec =con;
    }
    document.getElementById("min").value=conDec;
}

//for setting seconds
function incSec(){
    var con = document.getElementById("sec").value;
    
    if(con<59 && con>=0){
        var conInc =con;
        ++conInc;
    }
    else if(con==59){
        con=0;
        var conInc =con;   
    }
    document.getElementById("sec").value=conInc;

}

function decSec(){
    var con = document.getElementById("sec").value;
    if(con<=59 && con>0){
        var conDec =con;
        conDec--;
        
    }
    else  if(con<=0){
        con=59;
        var conDec =con;
    }
    document.getElementById("sec").value=conDec;
}
//for submit button
function submit(){
    var conhr = document.getElementById("hr").value;
    var conmin = document.getElementById("min").value;
    var consec = document.getElementById("sec").value;

    if(consec<10){
        displaysec="0"+consec.toString();
    }else{
        displaysec=consec;
    }
    if(conmin<10){
        displaymin="0"+conmin.toString();
    }else{
        displaymin=conmin;
    }
    if(conhr<10){
        displayhr="0"+conhr.toString();
    }else{
        displayhr=conhr;
    }

    //display time values
    document.getElementById("display").innerHTML=displayhr+":"+displaymin+":"+displaysec;
    reset=document.getElementById("display").innerHTML;
}

function playpause(){
    var conhr = document.getElementById("hr").value;
    var conmin = document.getElementById("min").value;
    var consec = document.getElementById("sec").value;

    if(consec>0){
        --consec;
    }
     
    if(consec<10){
        displaysec="0"+consec.toString();
    }else{
        displaysec=consec;
    }
    if(conmin<10){
        displaymin="0"+conmin.toString();
    }else{
        displaymin=conmin;
    }
    if(conhr<10){
        displayhr="0"+conhr.toString();
    }else{
        displayhr=conhr;
    }

    //display time values
    document.getElementById("display").innerHTML=displayhr+":"+displaymin+":"+displaysec;
    console.log(displayhr+":"+displaymin+":"+displaysec);
    console.log(consec);
    interval=window.setInterval(playpause ,1000);
}



function clockdelete(){
    status="stopped";
    document.getElementById("display").innerHTML="00:00:00";
    sec=0;min=0;hr=0;
    window.clearInterval(interval);
}
  
function clockreset(){
    if(status=="started"){
        status="stopped";
    }
    document.getElementById("display").innerHTML=reset;
    window.clearInterval(interval);
}