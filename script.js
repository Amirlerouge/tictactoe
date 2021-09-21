



window.onload = function(){

  const btn = document.querySelector('#btn');
  
  const submit = document.querySelector('#submit');






  btn.onclick = () => alert("Hello World");

  function displayName(){

    let playerOne =  document.querySelector('#oneName').value;
    let playerTwo =  document.querySelector('#twoName').value;
    alert("player one is " + playerOne);
    alert("player two is " + playerTwo);

  }

submit.addEventListener("click", displayName);






  





}