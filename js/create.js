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

    let conferences = JSON.parse(localStorage.getItem("conferences")) || [];

    const isDuplicate = conferences.some(conference => conference.title.toLowerCase() === title.toLowerCase());
    if (isDuplicate) {
        alert("A conference with this title already exists!");
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

    conferences.push(newConference);

    localStorage.setItem("conferences", JSON.stringify(conferences));

    alert("Conference created successfully!");
    window.location.href = "index.html"; 
});
