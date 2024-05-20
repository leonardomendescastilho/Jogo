const cardGame = document.querySelector('.card-wrapper');
const cardAnswer = document.querySelector('.card-answer-wrapper');

export const Settings ={
  openGame: ()=>{
    cardGame.classList.remove('hidden')
    cardGame.classList.add('open')
  },
  closeGame: ()=>{
    cardGame.classList.remove('open')
    cardGame.classList.add('hidden')
  },
  openAnswer: ()=>{
    cardAnswer.classList.add('open')
  },
  closeAnswer: ()=>{
    cardAnswer.classList.remove('open')
  }
}