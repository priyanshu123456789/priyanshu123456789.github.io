function myfunc(){
    var pass="";
    var samplespace=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","$"," ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var l=samplespace.length;
    for(i=0;pass.length<9;i++){
        var no=Math.round(Math.random()*100);
        if(no>0 && no<66){
            var abc=samplespace[no];
            pass=pass+abc;
        }
    }
 console.log("sjflsf");
    alert("your new generated password:  "+pass);
}