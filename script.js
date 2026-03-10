var button=document.querySelector('button');
var h5=document.querySelector('h5');
var check=0
button.addEventListener('click',function(){
    if(check==0){
    h5.innerHTML='Friend 🫂'
    h5.style.color='green'
    button.innerHTML='Unfriend'
    check=1
    }
   else{
    h5.innerHTML='Stranger'
    h5.style.color='black'
    button.innerHTML='Add Friend' 
    
    check=0
   }

})