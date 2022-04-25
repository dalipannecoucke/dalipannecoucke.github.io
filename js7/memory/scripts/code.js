let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}

const cards = new Map([
    ["kaart1", 'images/kaart1.png'],
    ["kaart2", 'images/kaart2.jpg'],
    ["kaart3", 'images/kaart3.png'],
    ["kaart4", 'images/kaart4.png'],
    ["kaart5", 'images/kaart5.png'],
    ["kaart6", 'images/kaart6.png']
])

const setup = () => {
    generateCards()

    setTimeout(hideCards, 10000);

    shuffle()
}

const shuffle = () => {
    let cards = document.getElementsByClassName("card");
    let cardsArray = Array.from(cards);
    let shuffledCards = cardsArray.sort(() => Math.random() - 0.5);
    let cardsField = document.getElementById("cards");
    for (let i = 0; i < cards.length; i++) {
        cardsField.appendChild(shuffledCards[i]);
    }
}

const generateCards = () => {
    let cardsField = document.getElementById("cards");
    let cardsArray = Array.from(cards.keys());

    // Put pairs of each card in the field
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        let card1;
        card1 = document.createElement("img");
        card1.src = cards.get(cardsArray[i]);
        card1.className = "card";
        card1.setAttribute("emoji", cardsArray[i]);
        card1.addEventListener("click", flipCard);
        cardsField.appendChild(card1);

        let card2;
        card2 = document.createElement("img");
        card2.src = cards.get(cardsArray[i]);
        card2.className = "card";
        card2.setAttribute("emoji", cardsArray[i]);
        card2.addEventListener("click", flipCard);
        cardsField.appendChild(card2);
    }
}

const flipCard = (event) => {
    // Flip the card and check if it is a match to a different flipped card
    let card = event.target;
    card.setAttribute("src", cards.get(card.getAttribute("emoji")));
    card.removeEventListener("click", flipCard);
    checkMatch(card);
}

const checkMatch = (card) => {
    // Check if the card is a match to a different flipped card
    let cards = document.getElementsByClassName("card");
    let flippedCards = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("src") !== "images/achterkant.jpg") {
            flippedCards.push(cards[i]);
        }
    }
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("emoji") === flippedCards[1].getAttribute("emoji")) {
            flippedCards[0].removeEventListener("click", flipCard);
            flippedCards[1].removeEventListener("click", flipCard);
            flippedCards[0].style.visibility = "hidden";
            flippedCards[1].style.visibility = "hidden";
            resetCards()
        } else {
            setTimeout(resetCards, 1000);
        }
    }
}

const resetCards = () => {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src", "images/achterkant.jpg");
        cards[i].addEventListener("click", flipCard);
    }
}

const hideCards = () => {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src", "images/achterkant.jpg");
    }

}




window.addEventListener('load', setup);