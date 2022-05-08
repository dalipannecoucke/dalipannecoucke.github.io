let kleuren = [];
const setup = () => {
    restoreKleuren()
    let sliders = document.getElementsByClassName('slider');

    sliders[0].setAttribute('value', localStorage.getItem('redValue'))
    sliders[1].setAttribute('value', localStorage.getItem('greenValue'))
    sliders[2].setAttribute('value', localStorage.getItem('blueValue'))

    update();
    sliders[0].addEventListener('change', update);
    sliders[0].addEventListener('input', update);
    sliders[1].addEventListener('change', update);
    sliders[1].addEventListener('input', update);
    sliders[2].addEventListener('change', update);
    sliders[2].addEventListener('input', update);

    let saveButton = document.getElementById("save")
    let deleteButton = document.getElementById('deleteAll')
    saveButton.addEventListener('click', save)
    deleteButton.addEventListener('click', deleteAll)
}
const refreshStorage = () =>{
    let alleKleuren = document.getElementsByClassName("opgeslaanKleur")
    kleuren = [];
    for (let i = 0; i < alleKleuren.length; i++) {
        RGB ={
            rood: alleKleuren[i].getAttribute('data-red'),
            groen: alleKleuren[i].getAttribute('data-green'),
            blauw: alleKleuren[i].getAttribute('data-blue')
        }
        kleuren.push(RGB);
    }
    localStorage.setItem('kleurenStorage', JSON.stringify(kleuren));
    console.log(localStorage.getItem('kleurenStorage'))
}
const restoreKleuren = () =>{
    if(localStorage.getItem('kleurenStorage') !== null){
        kleuren = JSON.parse(localStorage.getItem('kleurenStorage'))
        for (let i = 0; i < kleuren.length; i++) {
            maakDiv(kleuren[i].rood, kleuren[i].groen,kleuren[i].blauw)
        }
    }
}
const save = () =>{
    let sliders = document.getElementsByClassName('slider');

    maakDiv(sliders[0].value, sliders[1].value, sliders[2].value)

    let RGB = {
        rood: sliders[0].value,
        groen: sliders[1].value,
        blauw: sliders[2].value
    }
    kleuren.push(RGB);
    localStorage.setItem('kleurenStorage', JSON.stringify(kleuren))
    refreshStorage();
}

const verwijder =(event) =>{
    event.target.parentElement.remove()
    refreshStorage()
    update()
}

const maakDiv = (rood, groen, blauw) =>{
    let div = document.getElementsByClassName('opgeslaanKleuren')[0]
    let nieuwDiv = document.createElement('div')
    nieuwDiv.setAttribute('style', "background-color: rgb("+ rood +","+groen+","+blauw+")")
    nieuwDiv.setAttribute('class', "opgeslaanKleur")
    nieuwDiv.setAttribute('data-red', rood)
    nieuwDiv.setAttribute('data-green', groen)
    nieuwDiv.setAttribute('data-blue', blauw)
    nieuwDiv.addEventListener('click', pasKleurToe)

    let verwijderKnop = document.createElement('input')
    verwijderKnop.setAttribute('class', 'verwijderKruis')
    verwijderKnop.setAttribute('value', 'X')
    verwijderKnop.setAttribute('type', 'button')
    verwijderKnop.addEventListener('click', verwijder)
    nieuwDiv.appendChild(verwijderKnop)
    div.appendChild(nieuwDiv)
}
const pasKleurToe =(event) =>{
    let sliders = document.getElementsByClassName('slider');
    let vierkant = document.getElementById('vierkantje')
    vierkant.setAttribute('style', event.target.getAttribute('style'))
    sliders[0].value = event.target.getAttribute('data-red')
    sliders[1].value = event.target.getAttribute('data-green')
    sliders[2].value = event.target .getAttribute('data-blue')

    updateWaarden()
}
const updateWaarden =() =>{
    let sliders = document.getElementsByClassName('slider');

    let redValue = document.getElementById('red');
    let greenValue = document.getElementById('green');
    let blueValue = document.getElementById('blue');

    redValue.innerText = 'red ' + sliders[0].value;
    greenValue.innerText = 'green ' + sliders[1].value;
    blueValue.innerText = 'blue ' + sliders[2].value;

    localStorage.setItem('redValue', sliders[0].value)
    localStorage.setItem('greenValue', sliders[1].value)
    localStorage.setItem('blueValue', sliders[2].value)
}
const update = () =>{
    let sliders = document.getElementsByClassName('slider');

    updateWaarden()

    let vierkant = document.getElementById('vierkantje');
    vierkant.setAttribute('style', "background-color: rgb("+ sliders[0].value +","+sliders[1].value+","+sliders[2].value+")")
}
const deleteAll = () =>{
    localStorage.clear();
    document.getElementsByClassName('opgeslaanKleuren')[0].innerHTML = '';
}
window.addEventListener("load", setup);