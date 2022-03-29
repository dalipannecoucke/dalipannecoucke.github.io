const setup = () =>{
    let verzendenBtn = document.getElementById("verzenden");
    verzendenBtn.addEventListener("click", resultaat)
}

const resultaat = () =>{
    let isRoker = document.getElementById("isRoker").checked;
    isRoker ? console.log("is een roker") : console.log("is geen roker")

    let moedertaal = document.getElementsByName("moedertaal");
    for(let i = 0; i < moedertaal.length; i++){
        if(moedertaal[i].checked){
            moedertaal = moedertaal[i].value;
        }
    }
    console.log(`moedertaal is ${moedertaal}`);

    let favorieteBuurland = document.getElementById('favorieteBuurland');
    let keuze = favorieteBuurland.options[favorieteBuurland.selectedIndex].text;
    console.log(`Favoriete Buurland is ${keuze}`)

}

window.addEventListener("load", setup);