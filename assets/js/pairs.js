const cards = document.querySelectorAll('.card');

let hasCardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

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
    }      
}

//function playAgain {
    //if
//}

cards.forEach(card => card.addEventListener('click', onCardClicked))





