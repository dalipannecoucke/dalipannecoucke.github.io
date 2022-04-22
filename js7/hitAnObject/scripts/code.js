let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
}

const setup = () => {
    let img = document.getElementsByTagName("img")[0];
    img.style.position = "relative";

    img.addEventListener("click", klik);
    timeoutId = setInterval(verplaats, 3000);

}

const alert = () => {
    window.alert("GAME OVER");
}

const klik = (event) => {
    let img = event.target;

    if(img.src.slice(-5) ===  "0" + global.IMAGE_PATH_SUFFIX){
        alert();
        clearInterval(timeoutId);
    } else {
        verplaats();
    }
}

const verplaats = () => {
    let img = document.getElementsByTagName("img")[0];
    img.style.top = Math.random() * 752 + "px";
    img.style.left = Math.random() * 552 + "px";
    img.src = global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX;

}


const boodschap = () => {
    console.log("test");
}


let btn = document.getElementById("start");
btn.addEventListener("click", setup);