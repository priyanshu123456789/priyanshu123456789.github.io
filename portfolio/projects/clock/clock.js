var cache="";
function clock(){
    var d= new Date();

    var hour=d.getHours();
    var mins=d.getMinutes();
    var secs=d.getSeconds();

    var displaysec=0;
    var displaymin=0;
    var displayhr=0;
    document.getElementById("meridian").innerHTML="AM";
    if(hour>=12){
        document.getElementById("meridian").innerHTML="PM";
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
    document.getElementById("time").innerHTML=displayhr+":"+displaymin+":"+displaysec;

    if(document.getElementById("meridian").innerHTML=="AM"){
        document.querySelector('.container').style.background= '#fff';
        document.querySelector('h1').style.color= 'rgb(14, 19, 84)';
        document.querySelector('p').style.color= 'rgb(14, 19, 84)';
    }

}
window.setInterval(clock,1000)
