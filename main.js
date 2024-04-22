var tl = gsap.timeline();

function tym() {
    var num = 0
    var lh1 = document.querySelector("#loader h1")
    setInterval(function() {
        num+= Math.floor(Math.random() * 10)
        if (num<100) {
            lh1.innerHTML = num + "%"
        }
        else{
            num = 100
            lh1.innerHTML = num + "%"
        }
    }, 100)
}

tl.to("#loader h1", {
    scale: 1.5,
    delay: .5,
    duration: 1,
    onStart: tym()
})
tl.to("#loader", {
    top: "-100vh",
    delay: .5,
    duration: 1.5
})



// var heart = document.querySelector("#heart");
// console.log(heart);
// var flag = true;

// setInterval(function() {
//   flag = false;
//   scaling()
//   flag= true;
//   screwing()
// }, 1000);

// function scaling() {
//   heart.style.fontSize = "29px";
//   console.log(heart)
// }

// function screwing() {
//   heart.style.fontSize = "20vw";
//   console.log(heart);
// }