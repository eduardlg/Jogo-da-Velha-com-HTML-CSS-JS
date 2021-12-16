document.addEventListener("DOMContentLoaded", ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{

        square.addEventListener("click", handleClick);

    })


})

function handleClick(event){

   let square = event.target;
   let position = square.id;

  if (handleMove(position)){
    let player = findOutPlayer();
    setTimeout(() => {
        alert("O jogo acabou - " + player+ " foi o vencedor!")
    },10)
   
  };

   updateSquare(position);
}


function updateSquare(position){ //apenas 1 square
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}





// continue daqui

function updateSquares(){ // todos os squares

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ""){
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })

}




let button = document.getElementsByClassName("button");

function resetGame(){

    

}
