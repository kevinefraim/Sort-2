const cards = [];
const inputQty = document.querySelector("#cardQty");
const btnQty = document.querySelector("#btnQty");
const formQty = document.querySelector("#formQty");
const cardContainer = document.querySelector("#cardContainer");

//funcion que crea el mazo de cartas
const createDeck = () => {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const palos = ["Hearts", "Spades", "Diamonds", "Clubs"];

  for (let v = 0; v < values.length; v++) {
    for (let p = 0; p < palos.length; p++) {
      const valor = values[v];
      const palo = palos[p];

      cards.push({ valor, palo });
    }
  }

  return cards;
};
//ejecutando funcion para crear mazo
window.onload = createDeck();

//array de cartas random seleccionadas por cantidad
let sortedCards = [];

//funcion que obtiene cartas random segun la cantidad seleccionada
const getQty = (e) => {
  e.preventDefault();
  cardContainer.innerHTML = "";

  for (let i = 0; i < inputQty.value; i++) {
    const random = Math.floor(Math.random() * 51);

    const cardValor = cards[random].valor;
    const cardPalo = cards[random].palo;

    sortedCards.push({ cardValor, cardPalo });
  }
  inputQty.value = "";
  console.log(sortedCards);
  sortedCards.map((card) => {
    let entity;
    card.cardPalo === "Diamonds"
      ? (entity = "&diams;")
      : (entity = `&${card.cardPalo.toLowerCase()};`);

    cardContainer.innerHTML += `
    <div class="card ${card.cardPalo.toLowerCase()}">
    <span>${entity}</span>
    <p class="text-center m-0">${card.cardValor}</p>
    <div class="d-flex justify-content-end"><span>${entity}</span></div>
    </div>
    `;
  });
  sortedCards = [];
};

//evento onsubmit del form
formQty.addEventListener("submit", getQty);
