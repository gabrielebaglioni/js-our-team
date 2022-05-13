//creo una lista di ogetti "card"
//cre gli ogetti 
//img
//name
//ruolo
const cards = [
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/wayne-barnett-founder-ceo.jpg"
   },
];
// prendo il container html dove devo stampare i miei ogetti
const cardsContainer = document.querySelector(".team-container")
//ciclo la mia lista di ogetti 
for(let i = 0; i < cards.length; i++){
   const card = `
   <div class="team-card">
   <div class="card-image">
     <img
       src="${cards[i].img}"
       alt="Wayne Barnett"
     />
   </div>
   <div class="card-text">
     <h3>${cards[i].name}</h3>
     <p>${cards[i].ruolo}</p>
   </div>
 </div>
   `;
   cardsContainer.innerHTML += card;
}