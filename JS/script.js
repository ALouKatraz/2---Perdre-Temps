let date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();

heure = heure < 10 ? "0" + heure : heure;
minute = minute < 10 ? "0" + minute : minute;

document.getElementById("heure").innerHTML = heure + ":" + minute;

let count = minute;
let count2 = heure;

function time() {
  count = count + 1;
  if (count > 59) {
    count = 0; 
    count2++;
  }
  document.getElementById("heure").innerHTML = count2 + ":" + count;
}
document.getElementById("time").addEventListener("click", time);
