const BASE_URL = "https://deckofcardsapi.com/api/deck";

// Part 2.1

async function shuffleGetDeck() {
    const deck = await axios({ url: `${BASE_URL}/new/draw` });
    const {suit, value} = deck.data.cards[0];
    console.log(value.toLowerCase(), "of", suit.toLowerCase());
}

shuffleGetDeck();

// Part 2.2

async function getTwoCards() {
    const firstCard = await axios({ url: `${BASE_URL}/new/draw` });
    const deckId = firstCard.data["deck_id"];

    const secondCard = await axios({ url: `${BASE_URL}/${deckId}/draw` });

    let arr = [firstCard, secondCard];

    for(let consData of arr){
        const {suit, value} = consData.data.cards[0];
        console.log(value.toLowerCase(), "of", suit.toLowerCase());
    }
}

getTwoCards();

// Part 2.3

const $cardArea = $('#response');
const $button = $('button');
let deckId;

async function cardClickFunction() {
    let drawCard = await axios({ url: `${BASE_URL}/${deckId}/draw` });
    let cardImg = drawCard.data.cards[0].image;

    let rotation = Math.random() * 80 - 45;
    let x = Math.random() * 50 - 20;
    let y = Math.random() * 50 - 20;


    $cardArea.append($("<img>", {src: cardImg,
                                 css: {transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`},
                                }));

    if(drawCard.data['remaining'] === 0){
        $button.remove();
    }
}


async function setup() {
    const deckResp = await axios({ url: `${BASE_URL}/new/shuffle` });
    deckId = deckResp.data['deck_id'];
    $button.show().on("click", cardClickFunction);
}

setup();