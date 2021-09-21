
window.onload = function(){
  let change = true; // var to help alternate between x or o

  const btn = document.querySelector('#btn');
  const reset = document.querySelector('#reset');
  const box = document.querySelector('.game-board');

  btn.onclick = () => alert("Hello World");
  reset.onclick = () => location.reload();





  const Gameboard = {
    board: [" "," "," ",
            " "," "," ",
            " "," "," "],
     }




  function Marker(event) {

    let target = event.target; // where was the click?
 
    console.log(target);
   
    change = !change;

    if(target.innerHTML === " "){
      target.innerHTML = (change ? "X" : "O");
      Gameboard.board[target.id] = target.innerHTML;
      console.log(Gameboard.board);
    }


  
  }



     function render(){


      let box = document.querySelector(".game-board");
      let child = box.children;

      for (let i = 0; i < child.length; i++) {
        //console.log("box "  + child[i].innerHTML);
        //console.log("box in the board"  + Gameboard.board[i]);

        child[i].innerHTML = Gameboard.board[i]
      }


     }




    render();
      box.addEventListener('click', Marker);
      
 

      for (let i = 0; i < child.length; i++) {
        //console.log("box "  + child[i].innerHTML);
        console.log("box in the board"  + Gameboard.board[i]);

        child[i].innerHTML = Gameboard.board[i]
      }




}



