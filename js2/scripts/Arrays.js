

const setup = () => {
    let familieleden = ['Papa', 'Mama', 'Bono', 'Jana', 'Sara', 'Milan'];
    console.log('Aantal familieleden: ' + familieleden.length);
    console.log('Eerste familielid: '+ familieleden[0]);
    console.log('Derde familielid: '+ familieleden[2]);
    console.log('Vijfde familielid: '+ familieleden[4]);

    const voegNaam = () => {
        familieleden.push(prompt("Geef naam"));
        console.log(familieleden);
    }
    voegNaam();
}
window.addEventListener("load", setup);



