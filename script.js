 var text
 function disp(n)
 {
  document.getElementById("screen").value+=n
 }
 
 function clr()
 {
  document.getElementById("screen").value=""
 }
 
 function eq()
 {
   text=document.getElementById("screen").value
   clr()
   var result=eval(text)
   document.getElementById("screen").value=result
 }