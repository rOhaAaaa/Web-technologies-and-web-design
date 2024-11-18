const titleInput = document.getElementById("title_input");
const participantsInput = document.getElementById("participants_input");
const priceInput = document.getElementById("price_input");
const cityInput = document.getElementById("city_input");
const conferenceContainer = document.getElementById("conference_list");

const itemTemplate = ({ id, title, participants, price, city, image }) => 
`<li id="${id}" class="card mb-3">
    <img src="${image}" class="item-container__image card-img-top" alt="${title}">
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p>Participants: ${participants}</p>
    <p>Ticket price: $${price}</p>
    <p>City: ${city}</p>
    </div>
</li>`;

export const addItemToPage = ({ id, title, participants, price, city, image }) => {
    conferenceContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, participants, price, city, image })
    );
};

export const renderItemsList = (items) => {
    console.log("Rendering items:", items); 
    conferenceContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};