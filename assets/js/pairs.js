const cards = document.querySelectorAll('.card');

let isCardClicked = false;
let firstCard, secondCard;

function cardClicked() {
    this.classList.remove('color-hidden');

    if (!isCardClicked) {
        //first card
        isCardClicked = true;
        firstCard = this;
    } else {
        //second card
        isCardClicked = false;
        secondCard = this
        //do cards match?
        if (firstCard.dataset.color === secondCard.dataset.color) {
            //match
            firstCard.removeEventListener('click', cardClicked);//here for on hover 
            secondCard.removeEventListener('click', cardClicked);
        } else {
            //no match
            setTimeout(() => {
                firstCard.classList.add('color-hidden');
                secondCard.classList.add('color-hidden');
            }, 600)
        };
    };
};

cards.forEach(card => card.addEventListener('click', cardClicked));