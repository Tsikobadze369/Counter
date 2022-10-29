
let zero=document.querySelector('.zero')
let DECREASE=document.querySelector('.decrease');
let RESET=document.querySelector('.reset');
let INCREASE=document.querySelector('.increase');


let counter=0;


DECREASE.addEventListener('click', function(){
    counter--
    zero.innerHTML=counter;
    zero.style.color='red'
})
RESET.addEventListener('click',function(){
    counter=0;
    zero.innerHTML=counter;
    zero.style.color='black'
})
INCREASE.addEventListener('click',() => {
    counter++
    zero.innerHTML=counter;
    zero.style.color='green'
})



