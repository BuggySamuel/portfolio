var map = L.map('kaart').setView([51.241753720840734, 4.4451214488863515], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.241753720840734, 4.4451214488863515]).addTo(map);