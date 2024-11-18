import { addItemToPage } from "./conference.js";

let conferences = [];
let displayedConferences = [];

window.editConference = editConference;
window.deleteConference = deleteConference;
window.openModal = openModal;

window.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3002/items')
        .then(response => response.json())
        .then(data => {
            conferences = data;
            displayedConferences = [...conferences];
            renderItemsList(displayedConferences);
        })
        .catch(error => console.error('Error:', error));
        
    const editingConferenceId = localStorage.getItem("editingConferenceId");
    if (editingConferenceId) {
        const conference = conferences.find(conf => conf.id === editingConferenceId);
        if (conference) {
            document.getElementById("title_input").value = conference.title;
            document.getElementById("participants_input").value = conference.participants;
            document.getElementById("price_input").value = conference.price;
            document.getElementById("city_input").value = conference.city;
            document.getElementById("image_input").value = conference.image;
        }
    }
});

const findButton = document.getElementById("search_button");
const cancelFindButton = document.getElementById("reset_button");
const findInput = document.getElementById("search_input");
const sortButton = document.getElementById("sort_button");
const calculateButton = document.getElementById("calculate_button");
const summaryParticipants = document.getElementById("total_participants");

if (findButton) {
    findButton.addEventListener("click", () => {
        const searchTerm = findInput.value.toLowerCase().trim();
        displayedConferences = conferences.filter((conference) =>
            conference.title.toLowerCase().includes(searchTerm)
        );
        renderItemsList(displayedConferences);
    });
}

if (cancelFindButton) {
    cancelFindButton.addEventListener("click", () => {
        displayedConferences = [...conferences];
        renderItemsList(displayedConferences);
        findInput.value = "";
    });
}

if (calculateButton) {
    calculateButton.addEventListener("click", () => {
        const totalParticipants = displayedConferences.reduce(
            (total, conference) => total + Number(conference.participants),
            0
        );
        summaryParticipants.textContent = `Total Participants: ${totalParticipants}`;
    });
}

if (sortButton) {
    sortButton.addEventListener("click", () => {
        conferences.sort((first, second) => {
            return second.title.localeCompare(first.title); 
        });
        renderItemsList(conferences); 
    });
}

function editConference(conferenceId) {
    localStorage.setItem("editingConferenceId", conferenceId);
    window.location.href = "edit.html";
}

function openModal(conferenceId) {
    localStorage.setItem("deletingConferenceId", conferenceId);

    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});

document.getElementById("confirmDelete").addEventListener("click", () => {
    const conferenceId = localStorage.getItem("deletingConferenceId");
    
    fetch(`http://localhost:3002/items/${conferenceId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        alert("Conference deleted successfully!");
        window.location.reload();
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById("cancelDelete").addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});

function deleteConference(conferenceId) {
    openModal(conferenceId);
}

function renderItemsList(items) {
    const conferenceContainer = document.getElementById("conference_list");
    conferenceContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
}
