
let color = 'black';
let click = true;

function populateBoard(size) {


const board = document.querySelector('.board')
let squares = board.querySelectorAll('div')
squares.forEach((div) => div.remove())
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//row
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//Loop through the row and columns

let amount = size * size

for(let i=0; i< amount; i++) {

    let square = document.createElement('div')
    square.addEventListener('mouseover',colorSquare);
        //square.style.backgroundColor = "black";
        square.style.backgroundColor = "blue"
     board.appendChild(square);
    }
    
/*
for(let i=0; i< 256; i++) {
let square = document.createElement('div')
 square.style.backgroundColor = "blue"
 board.appendChild(square);
}
*/

}


populateBoard(16)



function changeSize(input) {
  if(input >= 2 && input <= 100){
    document.querySelector('.display').style.display = 'none'
    populateBoard(input);

  }  else{
    document.querySelector('.display').style.display = 'flex'
  }

    
    
}


function colorSquare() {

    if(click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
          } else {
            this.style.backgroundColor = color;
          }

    }
 
}


function changeColor(choice) {
    color = choice;
}


function resetBoard() {
    const board = document.querySelector('.board')
   let squares = board.querySelectorAll('div')
   //instead of removing the div, set bg to white;
   squares.forEach((div) => div.style.backgroundColor = 'blue')
}


document.querySelector('Body').addEventListener('click', ()=> {
    click = !click;
})