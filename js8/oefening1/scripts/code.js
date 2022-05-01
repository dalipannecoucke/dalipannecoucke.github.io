const setup = () => {

    let today = new Date();
    const verjaardag = new Date(2003,12,13);

    let verschil = (today - verjaardag) / (1000 * 60 * 60 * 24);

    console.log(Math.floor(verschil));

}
window.addEventListener("load", setup);