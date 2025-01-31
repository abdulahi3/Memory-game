const cards = document.querySelectorAll(".card");

let matchedcard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipcard(e){
    let clickedcard = e.target;
    if(clickedcard!==cardOne && !disableDeck){
        clickedcard.classList.add("flip");
        if(!cardOne){
            //retun the cardOne value to clickedcard
            return cardOne = clickedcard;
        }
        cardTwo = clickedcard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchcards(cardOneImg,cardTwoImg);

    }
}

function matchcards(img1,img2){
    if (img1===img2){ //if two cards img matched 
        matchedcard++; // increment matched value by 1
        // if matched value is 8 that means user has matched all the cards (8 * 2 = 16 cards)
        if(matchedcard == 8){
            setTimeout(() => {
                return shufflecard();
            }, 1000); // calling shufflecard function after 1 second
        }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne = cardTwo=""; //setting both card value to blank
        return disableDeck = false;
    }
    //if two card not matched 
  setTimeout(() => {
    //adding shake class to both card after 400s
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    // removing both shake & flip classes from the both card after 1.2 sedconds 
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo=""; //setting both card value to blank
    disableDeck = false;
  }, 1200);
}  

function shufflecard(){
    matchedcard = 0;
    cardOne = cardTwo = "";
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); //  sorting array item randomly

    // removing flip class from all cards and passing random image to each card
    cards.forEach((card, index) =>{ 
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${arr[index]}.png `
        card.addEventListener("click",flipcard);
    }); 
}
shufflecard();

cards.forEach(card =>{ //adding click event to all cards
    card.addEventListener("click",flipcard)
})

