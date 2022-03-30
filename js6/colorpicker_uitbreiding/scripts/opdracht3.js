const setup = () => {
    let colorDemos=document.getElementsByClassName("kleurenblokje")[0];
    let sliders = document.getElementsByClassName("slider");

    // maak het blokje rood
    colorDemos.style.backgroundColor="red";
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);


    let button = document.getElementById("save");
    button.addEventListener('click', save);
}

const update = () => {
    let colorDemos=document.getElementsByClassName("kleurenblokje")[0];
    let sliders = document.getElementsByClassName("slider");
    let rood=sliders[0].value;
    let groen=sliders[1].value;
    let blauw=sliders[2].value;
    document.getElementById("kleur1").textContent=rood
    document.getElementById("kleur2").textContent=groen;
    document.getElementById("kleur3").textContent=blauw;

    colorDemos.style.backgroundColor="rgb(" + rood + "," + groen + "," + blauw + ")";
}

const save = () => {
    let hokje = document.getElementsByClassName('kleurenblokje')[0];
    let nieuw = document.createElement('div');
    let knop = document.createElement('button');
    let bod = document.getElementsByTagName('body')[0];
    knop.textContent="X";
    knop.addEventListener('click', remove);



    let kleur;
    if(hokje.style.backgroundColor === "") {
        kleur = 'white';
    } else {
        kleur = hokje.style.backgroundColor;
    }
    nieuw.style.backgroundColor = kleur;
    nieuw.style.height = "60px";
    nieuw.style.width = "60px";
    nieuw.style.marginBottom = "10px";

    nieuw.addEventListener('click', terug);

    nieuw.appendChild(knop);
    bod.appendChild(nieuw);

}

const remove = (event) => {
    let hokje = event.target.parentElement;
    hokje.remove();
}

const terug = (event) => {
    let hokje = event.target;
    let kleur = document.getElementsByClassName("kleurenblokje")[0];

    kleur.style.backgroundColor = hokje.style.backgroundColor;
}

window.addEventListener("load", setup);