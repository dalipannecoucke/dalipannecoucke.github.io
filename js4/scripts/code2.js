const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click', uitvoeren);
}

const uitvoeren = () => {
    let input = document.getElementById('input').value;
    console.log(maakMetSpaties(input));
}

const maakMetSpaties = (input) => {
    let zin = document.getElementById("input");
    var stukken = zin.value.split("");
    var output = "";
    for(let i=0; i <stukken.length; i++) {
        if(stukken[i] != " ") {
            output += stukken[i];
        }
    }
    return output.split("").join(" ");
}

window.addEventListener("load", setup)