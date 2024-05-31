const date = new Date();
document.getElementById("time").innerText = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

setInterval(() => {
  document.getElementById("time").innerText = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}, 1000);

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}