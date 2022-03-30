const setup = () => {

    let lijst = document.querySelectorAll('li');
    for(let i = 0; i<lijst.length; i++) {
        lijst[i].classList.add('listItem');
    }

    let bod = document.querySelector('body');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'beyonce.jpg');
    bod.appendChild(newImg);

}
window.addEventListener("load", setup);