const setup = () => {

    let knop = document.getElementById("button");
    knop.addEventListener("click", uitvoeren);
}
window.addEventListener("load", setup);

const uitvoeren = () => {
    let zin = document.getElementById("input");
    var stukken = zin.value.split("");
    var output = "";
    for(let i=0; i <stukken.length; i++) {
        if(stukken[i] != " ") {
            output += stukken[i];
        }
    }
    console.log(output.split("").join(" "));
}
