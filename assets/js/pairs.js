const cards = document.querySelectorAll('.card');

let isCardClicked = false;
let lockBoard = false;
let firstCard, secondCard;
let combosFound = 0;

function cardClicked() {
    if (lockBoard) return;
    if (this === firstCard) return;

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
            disableCards();

            combos();

        } else {
            // No match
            enableCards();
        };
};

function disableCards() {
    firstCard.removeEventListener('click', cardClicked);
    secondCard.removeEventListener('click', cardClicked);
};

function combos() {
    combosFound++;
    if (combosFound === 8) {
        setTimeout(() => {

            alert('You Win!');

            window.location['reload']();

        }, 100);
    };
};

function enableCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.add('color-hidden');
        secondCard.classList.add('color-hidden');
        lockBoard = false;

        resetBoard();
    }, 600);
};

function resetBoard() {;
    [cardClicked, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null];
};

// Shuffles cards before game
(function shuffle() {
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 16);
        card.style.order = randomCard;
    });
})();

cards.forEach(card => card.addEventListener('click', cardClicked));