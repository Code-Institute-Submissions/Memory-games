const cards = document.querySelectorAll('.card');

let hasCardFlipped = false;
let firstCard, secondCard;

//When card is clicked, card color appears
function onCardClicked() {
    this.classList.replace('color-hidden', 'sample'); //change .replace to .toggle and remove '.'

    if(!hasCardFlipped) {
        //First click / Card 1
        hasCardFlipped = true;
        firstCard = this;
    } else {
        //Second click / Card 2
        hasCardFlipped = false;
        secondCard = this

        //If cards match
        if (firstCard.dataset.color === secondCard.dataset.color) {
            firstCard.removeEventListener('click', onCardClicked);
            secondCard.removeEventListener('click', onCardClicked);
        } else {
            //If cards DON'T match
            
            setTimeout(() => {
                firstCard.classList.add('color-hidden');
                secondCard.classList.add('color-hidden')
            }, 500);
        }
        
    }
}

cards.forEach(card => card.addEventListener('click', onCardClicked))





