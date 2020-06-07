let hasCardFlipped = false;
let firstCard, secondCard;
let lockBoard = false;
let combosFound = 0;

const cards = document.querySelectorAll('.card');

//When card is clicked, card color appears
function onCardClicked() {
    if (lockBoard) return;

    if(this === firstCard) return;
    this.classList.replace('color-hidden', 'sample'); //change .replace to .toggle and remove '.'

    if(!hasCardFlipped) {
        //First click / Card 1
        hasCardFlipped = true;
        firstCard = this;
    } else {
        //Second click / Card 2
        hasCardFlipped = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    //If cards match
    if (firstCard.dataset.color === secondCard.dataset.color) {
        firstCard.removeEventListener('click', onCardClicked);
        secondCard.removeEventListener('click', onCardClicked);
        preventClick = false;
    } else {
    //If cards DON'T match
    lockBoard = true;
        setTimeout(() => {
            firstCard.classList.add('color-hidden');
            firstCard.classList.remove('sample');
            secondCard.classList.add('color-hidden');
            secondCard.classList.remove('sample');
            lockBoard = false;
        }, 500);
    } win();
}

function win() {
    combosFound ++;
    if (combosFound === 8) {
        alert('CONGRATULATIONS | YOU WIN');
        const playAgain = document.querySelector('.btn')
        this.classList.replace('play-again', '')
    }
}

cards.forEach(card => card.addEventListener('click', onCardClicked))

//issues
//combosFound win function not working correcly
//only way to restart game is to refresh page (ONLY FIX IS NECESSARY)
