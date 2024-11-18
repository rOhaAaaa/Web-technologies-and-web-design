document.getElementById("create_form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const title = document.getElementById("title_input").value.trim();
    const participants = document.getElementById("participants_input").value;
    const price = document.getElementById("price_input").value;
    const city = document.getElementById("city_input").value.trim();
    const image = document.getElementById("image_input")?.value.trim() || './svg/placeholder.svg'; 

    if (!title || !participants || !price || !city) {
        alert("All fields are required!");
        return;
    }

    if (parseFloat(participants) <= 0 || parseFloat(price) < 0) {
        alert("Participants and price must be positive values!");
        return;
    }

    const newConference = {
        id: uuid.v4(), 
        title: title,
        participants: parseInt(participants),
        price: parseFloat(price),
        city: city,
        image: image 
    };

    fetch('http://localhost:3002/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConference),
    })
    .then(response => response.json())
    .then(data => {
        alert("Conference created successfully!");
        window.location.href = "index.html"; 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
