const setup = () => {
    let btncopy = document.getElementById('btncopy');
    btncopy.addEventListener('click', copy);
}
window.addEventListener('load', setup);

const copy = () => {
    let input = document.getElementById('input');
    let tekst = input.value;
    let output = document.getElementById('output');


    output.innerHTML = tekst;
}

