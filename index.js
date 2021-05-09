let count = 0;

document.querySelector(".count-btn").addEventListener("click", () => {
  count = count + 1;
  document.getElementById("count-down").innerHTML = count;
});
