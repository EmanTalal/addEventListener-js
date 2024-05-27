function buttonChangeT() {
    document.getElementById("name").innerHTML = "Hello World";
}

function buttonChangeSize() {
    let namesoze = document.getElementById("name");
    namesoze.style.fontSize = "59px";
}

function buttonChangeMat() {
    let namesoze = document.getElementById("name");
    namesoze.style.fontSize = "30px";
}


function buttonChangeColor() {
    let namesoze = document.getElementById("name");
    namesoze.style.color = "blue";
}

function buttonChangebackground() {
    let change = document.getElementById("name");
    change.style.backgroundColor = "green";
}


let image1 = 'joker.jpg';
let image2 = 'header1.jpg';
let isImage1 = true;

function buttonChangebackgroundImage() {
    if (isImage1) {
        document.body.style.backgroundImage = `url(${image2})`;
    } else {
        document.body.style.backgroundImage = `url(${image1})`;
    }
    isImage1 = !isImage1;
}