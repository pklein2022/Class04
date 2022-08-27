function changeColor() {
    let button = document.getElementById("btn");
    //Background color
    let r = Math.random () * 255;
    let g = Math.random () * 255;
    let b = Math.random () * 255;
    //Text color
    let x = Math.random () * 255;
    let y = Math.random () * 255;
    let z = Math.random () * 255;
    button.style.backgroundColor = `rgb(${r},${g},${b})`;
    button.style.color = `rgb(${x},${y},${z})`;
      let body = document.body;
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

