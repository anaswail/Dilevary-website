let mood = document.getElementById('mood');
let nav = document.querySelectorAll('.nav')
let body = document.body;
let mod = 'light';

mood.onclick = function () {
    for(let i = 0; i < nav.length; i++){
        nav[i].classList.toggle('darkNav')
    }
    body.classList.toggle('darkBody')
    if (body.className === 'darkBody'){
        mod = 'dark';
        mood.className = 'fa-solid fa-sun';
        mood.style.color = 'white';
    }
    else{
        mod = 'light';
        mood.className = 'fa-solid fa-moon';
        mood.style.color = 'black';
    }
    
}