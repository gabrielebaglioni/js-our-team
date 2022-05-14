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
      name: "Walter Gordon",
      ruolo: "office-manager",
      img : "img/walter-gordon-office-manager.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/scott-estrada-developer.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/angela-caroll-chief-editor.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/angela-lopez-social-media-manager.jpg"
   },
   {
      name: "wayne Barret",
      ruolo: "Founder / CEO",
      img : "img/barbara-ramos-graphic-designer.jpg"
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
// seleziono il bottone per creare una funzione al click
const btnAdd = document.getElementById("addMemberButton");
//seleziono ogni id del nuovo utente
const newMaberName = document.getElementById("name");
const newMeberRuolo = document.getElementById("role");
const newMeberImg = document.getElementById("image");
//creo un evento al click
btnAdd.addEventListener("click",
   function (){
      //creo un nuovo mebro del team tramite un ogetto
      const newMember = {
         name: newMaberName.value,
         ruolo: newMeberRuolo.value,
         img: newMeberImg.value
      }
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
   cards.push(newMember);
   }
);