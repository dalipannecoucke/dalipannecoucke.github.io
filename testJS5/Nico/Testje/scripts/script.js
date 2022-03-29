const setup = () =>{
    action.addEventListener("click", verdeel);
}

const verdeel = () =>{
    value = document.getElementById("passagiers").value.split(',');
    array = document.getElementById("passagiers").value;

    console.log(value.length);
    
    if(value.length % 6 === 0){
        array.split(',');
    }

}

window.addEventListener("load", setup);