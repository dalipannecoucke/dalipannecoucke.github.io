const setup = () => {
    let colorDemos=document.getElementsByClassName("kleurenblokje");
    let sliders = document.getElementsByClassName("slider");

    // maak het blokje rood
    colorDemos[0].style.backgroundColor="red";
    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
}

const update = () => {
    let colorDemos=document.getElementsByClassName("kleurenblokje");
    let sliders = document.getElementsByClassName("slider");
    let rood=sliders[0].value;
    let groen=sliders[1].value;
    let blauw=sliders[2].value;
    document.getElementById("kleur1").textContent=rood
    document.getElementById("kleur2").textContent=groen;
    document.getElementById("kleur3").textContent=blauw;

    colorDemos[0].style.backgroundColor="rgb(" + rood + "," + groen + "," + blauw + ")";
}
window.addEventListener("load", setup);