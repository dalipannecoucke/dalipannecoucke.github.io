const setup = () => {
    const button = document.getElementById("verzend");

    button.addEventListener("click", verzend)

}

const verzend = (event) => {

    event.preventDefault();

    let voornaam = document.getElementById('voornaam');
    let familienaam = document.getElementById('familienaam');
    let geboortedatum = document.getElementById('geboortedatum');
    let email = document.getElementById("email");
    let aantalKinderen = document.getElementById('kinderen');
}


window.addEventListener("load", setup)