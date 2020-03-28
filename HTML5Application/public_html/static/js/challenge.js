function ageindays(){
 var birthyear=prompt('whats your year of birth?');
var today = new Date();
var year=parseInt(today.getFullYear());
var age=(year/4)%10;
age=age +(year-birthyear)*365;
 var h1= document.createElement('h1');
 var textAnswer= document.createTextNode('you are '+ age+" old."); 
 h1.setAttribute('id','ageindays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
 console.log(age);
 }
 
 function reset(){
     document.getElementById('ageindays').remove();
 }
