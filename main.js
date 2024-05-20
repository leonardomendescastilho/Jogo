import { Settings } from './settings.js';

const input = document.querySelector('#input-number');

const buttonStart = document.querySelector('#btn-try');
const buttonReset = document.querySelector('#btn-again');
const span = document.querySelector('.card-answer-wrapper h1 > span');

const randomNumber =  Math.round(Math.random() * 10)

input.value = 0;


let count = 1;
buttonStart.addEventListener('click', (event)=>{
    event.preventDefault()
    if(randomNumber == input.value){
      Settings.closeGame();
      Settings.openAnswer();
      span.innerText = count;
    }
    count++;
})

buttonReset.addEventListener('click', ()=>{
    Settings.openGame();
    Settings.closeAnswer();
    count = 0;
    input.value = 0;
    location.reload();
})


