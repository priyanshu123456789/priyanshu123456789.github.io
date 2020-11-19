var cache="";
function clock(){
    var dad= new Date();

    var hour=dad.getHours();
    var mins=dad.getMinutes();
    var secs=dad.getSeconds();

    var displaysec=0;
    var displaymin=0;
    var displayhr=0;
    if(hour>12){
        hour=hour-12;
    }
    if(secs<10){
        displaysec="0"+secs.toString();
    }else{
        displaysec=secs;
    }
    if(mins<10){
        displaymin="0"+mins.toString();
    }else{
        displaymin=mins;
    }
    if(hour<10){
        displayhr="0"+hour.toString();
    }else{
        displayhr=hour;
    }
    if(hour<12){
        document.getElementById("meridian").innerHTML="AM";
    }
    else if(hour==12 && mins==0){
        document.getElementById("meridian").innerHTML="NOON";
    }
    else if(hour>12){
        document.getElementById("meridian").innerHTML="PM";
    }
    document.getElementById("time").innerHTML=displayhr+":"+displaymin+":"+displaysec;
}
window.setInterval(clock,1000)