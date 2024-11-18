import { addItemToPage, renderItemsList } from "./conference.js";

let conferences = JSON.parse(localStorage.getItem("conferences")) || [];
let displayedConferences = [...conferences];

const findButton = document.getElementById("search_button");
const cancelFindButton = document.getElementById("reset_button");
const findInput = document.getElementById("search_input");
const calculateButton = document.getElementById("calculate_button");
const summaryParticipants = document.getElementById("total_participants");
const sortButton = document.getElementById("sort_button");

function editConference(conferenceId) {
    localStorage.setItem("editingConferenceId", conferenceId);
    window.location.href = "edit.html";
}

function deleteConference(conferenceId) {
    const updatedConferences = conferences.filter(conference => conference.id !== conferenceId);
    localStorage.setItem("conferences", JSON.stringify(updatedConferences));
    renderItemsList(updatedConferences);
}

window.editConference = editConference;
window.deleteConference = deleteConference;

window.addEventListener("DOMContentLoaded", () => {
    if (conferences.length === 0) {
        conferences = [
            { id: uuid.v4(), title: 'AI & Robotics', participants: 150, price: 200, city: 'Kyiv', image: './svg/AI & Robotics.svg' },
            { id: uuid.v4(), title: 'Blockchain Expo', participants: 300, price: 250, city: 'Lviv', image: './svg/Blockchain Expo.svg' },
            { id: uuid.v4(), title: 'Data Science Summit', participants: 500, price: 300, city: 'Odesa', image: './svg/Data Science Summit.svg' }
        ];
        localStorage.setItem("conferences", JSON.stringify(conferences));
    }
    renderItemsList(conferences);  
});

function openModal(conferenceId) {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    localStorage.setItem("deletingConferenceId", conferenceId);
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById("cancelDelete").addEventListener("click", closeModal);

window.openModal = openModal;

document.getElementById("confirmDelete").addEventListener("click", function () {
    let conferenceId = localStorage.getItem("deletingConferenceId");
    if (conferenceId) {
        deleteConference(conferenceId);  
        closeModal();  
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function() {
            closeModal();
        });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});

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
        displayedConferences.sort((first, second) => {
            return second.title.localeCompare(first.title); 
        });
        renderItemsList(displayedConferences); 
    });
}
