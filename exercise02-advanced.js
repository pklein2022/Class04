document.getElementById("btn crazy-button");
const crazyButton = document.querySelector(".crazy-button");
crazyButton.addEventListener("mouseenter", goBtnWild);
function goBtnWild() {
  const offsetTop =
    Math.random() * (window.innerHeight - crazyButton.clientHeight);
  const offsetLeft =
    Math.random() * (window.innerWidth - crazyButton.clientWidth);
  crazyButton.style.top = offsetTop + "px";
  crazyButton.style.left = offsetLeft + "px";
  console.log("test");
}
