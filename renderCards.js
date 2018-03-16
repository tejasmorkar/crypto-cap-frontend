for(let i=1; i<=7; i++){
let newCard = document.createElement('div');
newCard.className = 'card';
newCard.id = `card${i}`;
let parentDiv = document.getElementById('cardsHolder');
parentDiv.appendChild(newCard);
let addedCard = document.getElementById(`card${i}`);
addedCard.innerHTML = `<img class="img" id="img${i}" src="Bitcoin.png" alt=""><br><h1 class="cardH1" id="cardH1${i}">Lorem Ipsum</h1><br><p id="cardIntro${i}" class="cardIntro">Lorem ipsum irure labore cillum eiusmod ad fugiat tempor duis in eu velit dolor.</p><br><span id="cardDesc${i}" class="cardDesc"><ul><li>Lorem ipsum sit ea est.</li><li>Lorem ipsum sit ea est.</li><li>Lorem ipsum sit ea est.</li><li>Lorem ipsum sit ea est.</li></ul></span><br><span id="cardRate${i}" class="cardRate">&dollar;0,000m</span><br><span id="cardButton${i}" class="cardButton">Click Here</span>`;
}