const cards = document.querySelectorAll('.card');

let isCardClicked = false;
let lockBoard = false;
let firstCard, secondCard;

function cardClicked() {
    if (lockBoard) return;
    this.classList.remove('color-hidden');

    if (!isCardClicked) {
        // First card
        isCardClicked = true;
        firstCard = this;

        return;
    };
    // Second card
    isCardClicked = false;
    secondCard = this;
        
    checkForMatch();
};

function checkForMatch() {
        if (firstCard.dataset.color === secondCard.dataset.color) {
            // Match
            disableCards()
        } else {
            // No match
            enableCards()
        };
};

function disableCards() {
    firstCard.removeEventListener('click', cardClicked);
    secondCard.removeEventListener('click', cardClicked);
};

function enableCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.add('color-hidden');
        secondCard.classList.add('color-hidden');
        lockBoard = false;
    }, 600);
};

cards.forEach(card => card.addEventListener('click', cardClicked));