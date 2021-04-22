var i=0;
function myFunction() {

    if(i==0){
    document.getElementById("myDropdown").style.display="inline-block";
    
    document.getElementById("dropbtn").innerHTML="<i class=\"fas fa-times\"></i>";
    document.getElementById("dropbtn").style.transform="rotateZ(90deg)";
    document.getElementById("dropbtn").style.animation="fade 0.5s";
    i=1;
    }
    else if(i==1){
        document.getElementById("dropbtn").style.transform="rotateZ(0deg)";
        document.getElementById("dropbtn").style.transition="0.5s ease-in-out";
        document.getElementById("dropbtn").style.animation="faderev 0.5s";
        $(document.getElementById("myDropdown")).delay("200").fadeOut();
        document.getElementById("dropbtn").innerHTML="<i class=\"fas fa-bars\"></i>";
        i=0;
    }

}

function fade(){
    document.getElementById("myDropdown").style.display="none";
}


document.getElementById("dummy").addEventListener('scroll', function(){

var x = document.getElementById("dummy").scrollLeft;
if(x>100){
    document.getElementById("arrow").style.display="none";
}
else if(x<100 && x>0){
    document.getElementById("arrow").style.display="block";
}

});
var scrolleffect = document.getElementById('navigationbar');
      $(window).on('scroll', function(){
        if($(window).scrollTop()){ 
            scrolleffect.classList.add("scrleff");
            console.log(screen.width);
            if(screen.width>500){
                document.getElementById('quote').style.marginTop="150px";
            }
            else if(screen.width<500){
                document.getElementById('myDropdown').classList.add("scrolldropdown");
                document.getElementById('myDropdown').style.top="10px";
                document.getElementById('quote').style.marginTop="82px";
            }
            document.getElementById('about').style.paddingTop="80px";
            document.getElementById('skills').style.paddingTop="80px";
            document.getElementById('works').style.paddingTop="80px";
        }else{
            console.log("world");
            scrolleffect.classList.remove("scrleff");
            document.getElementById('myDropdown').classList.remove("scrolldropdown");
            document.getElementById('myDropdown').style.top="70px";
            document.getElementById('quote').style.marginTop="initial";
            document.getElementById('about').style.paddingTop="initial";
            document.getElementById('skills').style.paddingTop="initial";
            document.getElementById('works').style.paddingTop="initial";
        }
    });