const setup = () => {

    let oldP = document.querySelectorAll('p')[0];
    let newText = document.createTextNode("good job!")

    oldP.firstChild.remove();
    oldP.appendChild(newText);

}
window.addEventListener("load", setup);