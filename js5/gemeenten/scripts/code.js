const setup = () => {
    let verzameling = [];
    let gemeente = "";
    let select = document.getElementById("gemeenten");

    let i = 0;
    do{
        gemeente = prompt("gemeente").trim()

        if(gemeente.localeCompare("stop")){
            verzameling[i] = gemeente;
        }
        i++;

    }while(gemeente.localeCompare("stop") !== 0)

    verzameling.sort();

    console.log(verzameling);

    for (let i = 0; i < gemeenten.length ; i++) {

        select.innerHTML += "<option>" + verzameling[i].trim() + "</option>";
    }
}
window.addEventListener("load", setup);