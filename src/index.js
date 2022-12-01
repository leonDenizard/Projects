let numberRandon = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

const title = document.querySelector('h1');

function textWriter(element){
  const textArray = element.innerHTML.split('');
  
  element.innerHTML = ""
  textArray.forEach((lyrc, i) =>{
    setTimeout(()=> { element.innerHTML += `${lyrc}` }, 95 * i)
    
  });
}

textWriter(title)


function checkGuess(){


  const userGuess = Number(guessField.value);
  
  if(guessCount === 1){
    guesses.textContent = 'Palpite anterior: ';

  }

  guesses.textContent += ` ${userGuess}`

  if(userGuess === numberRandon){

    lastResult.textContent = "Parabéns você acertou";
    lastResult.style.backgroundColor = '#b5e48c';
    lastResult.style.color = "#000"
    lowOrHi.textContent = "";
    setGameOver();

  }else if(guessCount === 10){

    lastResult.textContent = "Acabou as chances!!!!";
    lowOrHi.textContent = "";
    setGameOver();

  }else{
    lastResult.textContent = "Errado!";
    lastResult.style.backgroundColor = "#f08080";

    if(userGuess < numberRandon){

      lowOrHi.textContent = "Chute baixo de mais!"
      lowOrHi.style.opacity = 1
    }else if(userGuess > numberRandon){
      lowOrHi.textContent = "Chute alto de mais!"
      lowOrHi.style.opacity = 1
      
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();


}

console.log(numberRandon)
guessSubmit.addEventListener('click', checkGuess)

function setGameOver(){

  guessField.disabled = true;
  guessSubmit.disabled = true;
  guessSubmit.style.backgroundColor = "#2323";
  guessSubmit.style.color = "#000";
  guessSubmit.style.cursor = "no-drop";

  lowOrHi.style.opacity = "0"

  resetButton = document.createElement('button');
  resetButton.textContent = "Iniciar novo jogo";
  
  const main = document.querySelector('main');

  main.append(resetButton)
  
  
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
  
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');

  for (const resetPara of resetParas){
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  

  guessField.disabled = false;
  guessField.value = "";
  guessField.focus();
  
  guessSubmit.disabled = false;
  guessSubmit.style.backgroundColor = "#3a86ff";
  guessSubmit.style.color = "#fff";
  guessSubmit.style.cursor = "pointer";

  lastResult.style.backgroundColor = "transparent"
  lastResult.style.border = "none"

  lowOrHi.style.opacity = "0"
  

  numberRandon = Math.floor(Math.random()* 100) + 1;
}