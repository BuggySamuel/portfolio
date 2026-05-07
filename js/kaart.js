var map = L.map('kaart').setView([51.24136515573733, 4.445437650684831], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.24136515573733, 4.445437650684831]).addTo(map);