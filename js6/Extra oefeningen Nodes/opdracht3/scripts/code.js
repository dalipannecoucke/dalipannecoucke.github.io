const setup = () => {

    let button = document.getElementsByTagName('button');
    button[0].addEventListener('click', uitvoeren);

}

const uitvoeren = () => {
    let newP = document.createElement('p');
    let newText = document.createTextNode('Tekst');
    let div = document.getElementById('myDIV');
    newP.appendChild(newText);
    div.appendChild(newP);
}

window.addEventListener("load", setup);