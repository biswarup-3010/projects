const btn = document.getElementById("btn");
const random_col = () => {
  let val = "0123456789ABCDEF";
  let col = "#";
  for (let i = 0; i < 6; i++) {
    col = col + val[Math.floor(Math.random() * 16)];
  }
  return col;
};

function RandomColourChange() {
  document.body.style.backgroundColor = random_col();
}
function now() {
  setInterval(RandomColourChange, 1000);
}
function then() {
  setInterval(RandomColourChange, 10);
}
btn.addEventListener("click", now);
btn.addEventListener("dblclick", then);
