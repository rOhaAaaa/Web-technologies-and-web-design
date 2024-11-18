document.getElementById("edit_form").addEventListener("submit", function (event) { 
    event.preventDefault();

    const title = document.getElementById("title_input").value.trim();
    const participants = document.getElementById("participants_input").value;
    const price = document.getElementById("price_input").value;
    const city = document.getElementById("city_input").value.trim();
    const image = document.getElementById("image_input").value.trim(); 

    if (!title || !participants || !price || !city || !image) {
        alert("All fields are required!");
        return;
    }

    let conferenceId = localStorage.getItem("editingConferenceId");
    let conferences = JSON.parse(localStorage.getItem("conferences")) || [];

    let conferenceIndex = conferences.findIndex(conference => conference.id === conferenceId);
    if (conferenceIndex !== -1) {
        conferences[conferenceIndex] = {
            id: conferenceId,
            title: title,
            participants: parseInt(participants),
            price: parseFloat(price),
            city: city,
            image: image 
        };

        localStorage.setItem("conferences", JSON.stringify(conferences));
        alert("Changes saved successfully!");
        window.location.href = "index.html"; 
    } else {
        alert("Conference not found!");
    }
});

window.addEventListener("DOMContentLoaded", () => {
    let conferenceId = localStorage.getItem("editingConferenceId");
    let conferences = JSON.parse(localStorage.getItem("conferences")) || [];
    let conference = conferences.find(conference => conference.id === conferenceId);

    if (conference) {
        document.getElementById("title_input").value = conference.title;
        document.getElementById("participants_input").value = conference.participants;
        document.getElementById("price_input").value = conference.price;
        document.getElementById("city_input").value = conference.city;
        document.getElementById("image_input").value = conference.image; 
    } else {
        alert("Conference not found!");
    }
});
