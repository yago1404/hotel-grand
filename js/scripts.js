function cardFocus(index, isOut=false) {
    card1 = document.getElementById('card1');
    card2 = document.getElementById('card2');
    card3 = document.getElementById('card3');
    card4 = document.getElementById('card4');
    
    const cards = [card1, card2, card3, card4];

    if(!isOut) {
        cards.forEach(card => {
            if(cards[index - 1] !== card) {
                card.style.opacity = 0.5;
            }
        });
    } else {
        cards.forEach(card => {
            card.style.opacity = 1;
        });
    }
}