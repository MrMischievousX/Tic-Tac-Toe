var pads = document.querySelectorAll(".grid div");
turn = true;
count = 0;
play = 0;
var red = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var green = [0, 0, 0, 0, 0, 0, 0, 0, 0];

play++;
function single() {
  console.log("Single");
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      if (
        pads[index].style.background != "red" &&
        pads[index].style.background != "green"
      ) {
        pads[index].style.background = "red";
        count++;
        redWins(index);
        tie();
        if (count < 8) {
          window.setTimeout(aiTurn(), 1000);
        }
      }
    });
  });
}

function aiTurn() {
  while (1) {
    var a = Math.floor(Math.random() * 9);
    console.log(a);
    if (
      pads[a].style.background != "red" &&
      pads[a].style.background != "green"
    ) {
      pads[a].style.background = "green";
      count++;
      window.setTimeout(greenWins(a), 2000);
      tie();
      break;
    }
  }
}

function multi() {
  console.log("Multi");
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      if (
        turn === true &&
        pads[index].style.background != "red" &&
        pads[index].style.background != "green"
      ) {
        pads[index].style.background = "red";
        turn = false;
        count++;
        redWins(index);
        tie();
      } else if (
        turn === false &&
        pads[index].style.background != "red" &&
        pads[index].style.background != "green"
      ) {
        pads[index].style.background = "green";
        turn = true;
        count++;
        greenWins(index);
        tie();
      }
    });
  });
}

// Red Chances of Wins
function redWins(val) {
  red[val] = 1;
  if (
    (red[0] == 1 && red[1] == 1 && red[2] == 1) ||
    (red[3] == 1 && red[4] == 1 && red[5] == 1) ||
    (red[6] == 1 && red[7] == 1 && red[8] == 1) ||
    (red[0] == 1 && red[3] == 1 && red[6] == 1) ||
    (red[1] == 1 && red[4] == 1 && red[7] == 1) ||
    (red[2] == 1 && red[5] == 1 && red[8] == 1) ||
    (red[0] == 1 && red[4] == 1 && red[8] == 1) ||
    (red[2] == 1 && red[4] == 1 && red[6] == 1)
  ) {
    count++;
    window.setTimeout(redParty, 200);
  }
}

function redParty() {
  document.getElementById("win").textContent = "Red Wins";
  document.getElementById("win").style.color = "Red";
  window.setTimeout(start, 2000);
}

// Green Chances of Wins
function greenWins(val) {
  green[val] = 1;
  if (
    (green[0] == 1 && green[1] == 1 && green[2] == 1) ||
    (green[3] == 1 && green[4] == 1 && green[5] == 1) ||
    (green[6] == 1 && green[7] == 1 && green[8] == 1) ||
    (green[0] == 1 && green[3] == 1 && green[6] == 1) ||
    (green[1] == 1 && green[4] == 1 && green[7] == 1) ||
    (green[2] == 1 && green[5] == 1 && green[8] == 1) ||
    (green[0] == 1 && green[4] == 1 && green[8] == 1) ||
    (green[2] == 1 && green[4] == 1 && green[6] == 1)
  ) {
    count++;
    window.setTimeout(greenParty, 200);
  }
}

function greenParty() {
  document.getElementById("win").textContent = "Green Wins";
  document.getElementById("win").style.color = "Green";
  window.setTimeout(start, 2000);
}

// ReStart
function start() {
  window.location.reload();
}

// Tie Check
function tie() {
  if (count == 9) {
    document.getElementById("win").textContent = "Tie";
    window.setTimeout(start, 2000);
  }
}
