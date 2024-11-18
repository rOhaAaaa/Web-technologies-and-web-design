import { addItemToPage, renderItemsList } from "./conference.js";

const findButton = document.getElementById("search_button");
const cancelFindButton = document.getElementById("reset_button");
const findInput = document.getElementById("search_input");
const calculateButton = document.getElementById("calculate_button");
const summaryParticipants = document.getElementById("total_participants");
const sortButton = document.getElementById("sort_button");

const titleInput = document.getElementById("title_input");
const participantsInput = document.getElementById("participants_input");
const priceInput = document.getElementById("price_input");
const cityInput = document.getElementById("city_input");

let conferences = [
    { id: uuid.v4(), title: 'AI & Robotics', participants: 150, price: 200, city: 'Kyiv', image: './svg/AI & Robotics.svg' },
    { id: uuid.v4(), title: 'Blockchain Expo', participants: 300, price: 250, city: 'Lviv', image: './svg/Blockchain Expo.svg' },
    { id: uuid.v4(), title: 'Data Science Summit', participants: 500, price: 300, city: 'Odesa', image: './svg/Data Science Summit.svg' }
];


let displayedConferences = [...conferences];  


findButton.addEventListener("click", () => {
const searchTerm = findInput.value.toLowerCase().trim();
displayedConferences = conferences.filter((conference) =>
    conference.title.toLowerCase().includes(searchTerm)
);
renderItemsList(displayedConferences);
});


cancelFindButton.addEventListener("click", () => {
displayedConferences = [...conferences];
renderItemsList(displayedConferences);
findInput.value = "";
});



sortButton.addEventListener("click", () => {
    displayedConferences.sort((first, second) => {
        return second.title.localeCompare(first.title); 
    });
    renderItemsList(displayedConferences); 
});

window.addEventListener("DOMContentLoaded", () => {
    console.log("Initial conference list:", conferences);
    renderItemsList(conferences);
});


const t = {t: 8};
t.t = 9;