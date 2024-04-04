let date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();

let count = 0;

document.getElementById("heure").innerHTML = heure + ":" + minute;

function time() {
  count = minute + 1;
  document.getElementById("heure").innerHTML = heure + ":" + count;
}
document.getElementById("time").addEventListener("click", time);

