const roomsPanel = document.getElementById("rooms");
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", async () => {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    alert("Seleciona datas válidas");
    return;
  }

  // :link: AQUI entra a API REAL do channel manager
  // Exemplo: Beds24 / Cloudbeds / Smoobu
  // const response = await fetch("API_ENDPOINT", {...});

  // MOCK de resposta (substituir por API real)
  const availableRooms = [
    {
      id: 1,
      name: "Suite Ocean",
      price: 180,
      image: "suite-ocean.jpg",
      tag: "Hot deal · Últimas datas"
    },
    {
      id: 2,
      name: "Quarto Jardim",
      price: 140,
      image: "quarto-jardim.jpg",
      tag: "Melhor tarifa direta"
    }
  ];

  renderRooms(availableRooms);
});

function renderRooms(rooms) {
  roomsPanel.innerHTML = "";

  rooms.forEach(room => {
    const card = document.createElement("div");
    card.className = "room-card";

    card.innerHTML = `
      <img src="${room.image}">
      <div class="room-info">
        <h3>${room.name}</h3>
        <div class="price">€${room.price} / noite</div>
        <div class="tag">${room.tag}</div>
        <button onclick="bookRoom(${room.id})">Reservar</button>
      </div>
    `;

    roomsPanel.appendChild(card);
  });
}

function bookRoom(roomId) {
  // :link: chamada final ao channel manager
  // cria reserva, bloqueia datas, confirma pagamento
  alert("Reserva iniciada para o quarto ID: " + roomId);
}