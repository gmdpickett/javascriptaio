/* 

Gamelet: a starting poirt for writing games
Author: Mike Picket - based on concepts from Chris Minnick
Version: 1.0
Instructions:
Include the .js file in an HTML document containing an eleent with an id of 'ball'. 
The script will detect when the left or right arrow key is pressed and will move the ball element acccordingly. 

*/

const ball = document.getElementById("ball"); //get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0; // set initial position

/*

handleKeyPress
responds to certain key presses by updating position.

*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 20;
  }
  if (e.code === "ArrowRight") {
    position = position + 20;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // repositions the ball
}

/*

refresh
changes the position of the ball

*/
function refresh() {
  ball.style.left = position + "%";
  ball.style.top = position + "%";
}
