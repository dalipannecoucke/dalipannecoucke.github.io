const setup = () => {
    console.log("dit is een mededeling op de console");
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    console.log(window.confirm().valueOf());
    console.log(window.prompt("Wat is uw naam", "onbekend").valueOf());
}
window.addEventListener("load", setup);