let date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();

let count = minute;
let count2 = heure;

count2 = count2 < 10 ? "0" + count2 : count2;
count = count < 10 ? "0" + count : count;

document.getElementById("heure").innerHTML = count2 + ":" + count;

function time() {
  count = parseInt(count) + 1;
  if (count > 59) {
    count = 0;
    count2++;
  }
  count2 = parseInt(count2);
  if (count2 > 23) {
    count2 = 0;
  }
  count2 = count2 < 10 ? "0" + count2 : count2;
  count = count < 10 ? "0" + count : count;
  document.getElementById("heure").innerHTML = count2 + ":" + count;
}
document.getElementById("time").addEventListener("click", time);
