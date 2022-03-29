const setup = () => {
    let zin = "De jongen zat gisteren op de stoep en at de helft van de appel";

    let stukken = zin.split(" ");

    for (let i = 0; i < stukken.length; i++) {

        if(stukken[i].toLowerCase().localeCompare("de") === 0){

            stukken[i] = "het";
        }
    }
    console.log(stukken.join(" "));
}
window.addEventListener("load", setup);