const setup = () => {
    let button = document.getElementById('action');
    button.addEventListener('click', uitvoeren);
}


const uitvoeren = () => {
    let input = document.getElementById('passagiers').value;
    let stukken = input.split(",");
    var output = "";
    for(let i=0; i<stukken.length; i++) {
        if(i%2===0){
            output += stukken[i];
            output += "\n";
        } else {
            output += stukken[i] + " - ";
        }
    }
    console.log(output);

}
window.addEventListener('load', setup)