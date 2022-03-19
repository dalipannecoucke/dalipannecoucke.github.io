const setup = () => {
    const text = "De man van An geeft geen hand aan ambetante verwanten";

    let aantal =  (text.split("an")).length;


    console.log(aantal)
}

window.addEventListener('load', setup)