const setup = () => {
    let btnsubstring = document.getElementById("btnsubstring");
    btnsubstring.addEventListener("click", uitrekenen);
}

const uitrekenen = () => {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let start = document.getElementById("start");
    let end = document.getElementById("end");

    let tekst = input.value;
    let result;

    tekst === "" ? result = "(geen output)" :  result = tekst.substring(start.value, end.value);
    output.innerHTML = result;
}

window.addEventListener('load', setup);