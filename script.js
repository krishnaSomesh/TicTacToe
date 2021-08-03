let row1XCounter = 0;
let row2XCounter = 0;
let row3XCounter = 0;
let col1XCounter = 0;
let col2XCounter = 0;
let col3XCounter = 0;

let row1OCounter = 0;
let row2OCounter = 0;
let row3OCounter = 0;
let col1OCounter = 0;
let col2OCounter = 0;
let col3OCounter = 0;

let diagonal1XCounter = 0;
let diagonal1OCounter = 0;
let diagonal2XCounter = 0;
let diagonal2OCounter = 0;

let boardCounter = 0;

let gameOver = false;

let userX;
let userO;
let firstRun = true;

let enterData = (rowID, colID, colGroup) => {
  if (!gameOver) {
    let currentUser = document.getElementById("userName");
    let currentCol = document.getElementById(colID);
    currentUser.innerText = userX;
    if (boardCounter % 2 == 0) {
      currentCol.innerText = "X";
    } else {
      currentCol.innerText = "O";
    }
    currentCol.style.pointerEvents = "none";
    increaseCounter(rowID, colID, colGroup, currentUser.innerText);
    checkWinner();
    if (!gameOver) isGameTie();
    if (!gameOver) {
      if (boardCounter % 2 == 0) currentUser.innerText = userX;
      else currentUser.innerText = userO;
    }
  }
};

let isGameTie = () => {
  boardCounter++;
  if (boardCounter === 9) {
    setTimeout(() => alert("Game is tied"), 1);
    gameOver = true;
  }
};

let increaseCounter = (rowID, colID, colGroup, userName) => {
  if (boardCounter % 2 == 0) {
    if (rowID === 1) {
      row1XCounter++;
      if (colID == 1) diagonal1XCounter++;
      if (colID == 3) diagonal2XCounter++;
    }
    if (rowID === 2) {
      row2XCounter++;
      if (colID === 5) {
        diagonal1XCounter++;
        diagonal2XCounter++;
      }
    }
    if (rowID === 3) {
      row3XCounter++;
      if (colID === 9) diagonal1XCounter++;
      if (colID === 7) diagonal2XCounter++;
    }
    if (colGroup === 1) col1XCounter++;
    if (colGroup === 2) col2XCounter++;
    if (colGroup === 3) col3XCounter++;
  } else {
    if (rowID === 1) {
      row1OCounter++;
      if (colID == 1) diagonal1OCounter++;
      if (colID == 3) diagonal2OCounter++;
    }
    if (rowID === 2) {
      row2OCounter++;
      if (colID === 5) {
        diagonal1OCounter++;
        diagonal2OCounter++;
      }
    }
    if (rowID === 3) {
      row3OCounter++;
      if (colID === 9) diagonal1OCounter++;
      if (colID === 7) diagonal2OCounter++;
    }
    if (colGroup === 1) col1OCounter++;
    if (colGroup === 2) col2OCounter++;
    if (colGroup === 3) col3OCounter++;
  }
};

let checkWinner = () => {
  if (
    row1XCounter === 3 ||
    row2XCounter === 3 ||
    row3XCounter === 3 ||
    col1XCounter === 3 ||
    col2XCounter === 3 ||
    col3XCounter === 3 ||
    diagonal1XCounter === 3 ||
    diagonal2XCounter === 3
  ) {
    setTimeout(() => alert(`User ${userX} wins !!!`), 1);
    gameOver = true;
  } else if (
    row1OCounter === 3 ||
    row2OCounter === 3 ||
    row3OCounter === 3 ||
    col1OCounter === 3 ||
    col2OCounter === 3 ||
    col3OCounter === 3 ||
    diagonal1OCounter === 3 ||
    diagonal2OCounter === 3
  ) {
    setTimeout(() => alert(`User ${userO} wins !!!`), 1);
    gameOver = true;
  }
};

let updateName = () => {
  localStorage.removeItem("tttUserX");
  localStorage.removeItem("tttUserO");
  userX = document.getElementById("userX").value;
  userO = document.getElementById("userO").value;
  if (userX === "") userX = "X";
  if (userO === "") userO = "O";
  localStorage.setItem("tttUserX", userX);
  localStorage.setItem("tttUserO", userO);
  window.location.assign("game.html");
  console.log(`${userX}     ${userO}`);
};

let getNames = () => {
  if (firstRun) {
    userX = localStorage.getItem("tttUserX");
    userO = localStorage.getItem("tttUserO");
    firstRun = false;
  }
  document.getElementById("userName").innerText = userX;
};
