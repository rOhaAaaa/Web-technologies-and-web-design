window.addEventListener("DOMContentLoaded", () => {
    let conferenceId = localStorage.getItem("editingConferenceId");
    
    if (conferenceId) {
        fetch(`http://localhost:3002/items/${conferenceId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("title_input").value = data.title;
                document.getElementById("participants_input").value = data.participants;
                document.getElementById("price_input").value = data.price;
                document.getElementById("city_input").value = data.city;
                document.getElementById("image_input").value = data.image;
            })
            .catch(error => console.error('Error:', error));
    } else {
        console.error('Conference ID is not found in localStorage');
    }
});

document.getElementById("edit_form").addEventListener("submit", function (event) {
    event.preventDefault();

    let conferenceId = localStorage.getItem("editingConferenceId");

    const title = document.getElementById("title_input").value.trim();
    const participants = document.getElementById("participants_input").value;
    const price = document.getElementById("price_input").value;
    const city = document.getElementById("city_input").value.trim();
    const image = document.getElementById("image_input").value.trim();

    if (!title || !participants || !price || !city || !image) {
        alert("All fields are required!");
        return;
    }

    const updatedConference = {
        id: conferenceId,
        title: title,
        participants: parseInt(participants),
        price: parseFloat(price),
        city: city,
        image: image
    };

    fetch(`http://localhost:3002/items/${conferenceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedConference),
    })
    .then(response => response.json())
    .then(data => {
        alert("Changes saved successfully!");
        window.location.href = "index.html"; 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
