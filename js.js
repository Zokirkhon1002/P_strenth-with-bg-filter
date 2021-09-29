let kalit = document.getElementById("password"),
    background = document.getElementById("background");


kalit.addEventListener("input",(e)=>{
    let input = e.target.value;
    let uzunlik = input.length;
    let blurQiymat = 20 - uzunlik * 2;
    background.style.filter = `blur(${blurQiymat})`
})