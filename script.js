function elements(e) {
    return document.querySelectorAll(e);
}

function element(e) {
    return document.querySelector(e);
}

// Thanks to armandocanals.com for the blog about mousemove events
const cards = elements(".card-inner");
const constraint = 100;

cards.forEach(card =>{
    card.onmousemove = (event) =>{
        let box = card.getBoundingClientRect();
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let calcX = -(mouseY - box.y - (box.height / 2)) / constraint;
        let calcY = (mouseX - box.x - (box.width / 2)) / constraint;
        if (card.classList.contains("card-back")) {
            card.style.transform = `perspective(100px) rotateX(${calcX}deg) rotateY(-${calcY + 180}deg)`;
        }else {
            card.style.transform = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
        }
        
    };

    card.onmouseleave = (event) =>{
        if (card.classList.contains("card-back")) {
            card.style.transform = `rotateY(180deg)`;
        } else {
            card.style.transform = "none";
        }  
    };
})


// Theme togglers
const modeTogler = element("#colorMode");
const cardFlippers = elements(".card-flip");
const body = element("body");

modeTogler.addEventListener("change", ()=>{
    let cardCounter = 0;

    function flipCards(counter) {
        if (counter != cardFlippers.length) {
            cardFlippers[counter].classList.toggle("flipped");
            console.log(counter, cardFlippers.length);
           
            setTimeout(() => {
                flipCards(counter+1);
            }, 50);
        } else {
            console.log(2);
            return;
        }
    }

    body.classList.toggle("white");
    flipCards(cardCounter);

});

