
let table = [
    "fond2.jpg",
    "fond.jpg"
];

let change = document.querySelector("#moi");


let i = 0 ;
setInterval(function(){
    change.style.backgroundImage = "url("+ table[i] + ")";
    i = i+1;
    if(i == table.length){
        i = 0;
    }
},5000)