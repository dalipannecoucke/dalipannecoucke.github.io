const setup = () => {
    let btn = document.getElementById("btnsubstring");
    btn.addEventListener("click", change);

}

const change = () => {
    let txtOutputElement = document.getElementById("txtOutput");
    txtOutputElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);