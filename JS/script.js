let date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();

heure = heure < 10 ? "0" + heure : heure;
minute = minute < 10 ? "0" + minute : minute;

let count = minute;

document.getElementById("heure").innerHTML = heure + ":" + minute;

function time() {
  count = count + 1;
  document.getElementById("heure").innerHTML = heure + ":" + count;
}
document.getElementById("time").addEventListener("click", time);
