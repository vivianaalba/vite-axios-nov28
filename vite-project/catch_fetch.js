import axios from "axios";

export function getRandomCatImage() {
    axios.get('https://cataas.com/cat?json=true')
    .then((response) => {
        const catData = response.data;
        const catImageContainer = document.getElementById('catImageContainer');
        if (catData._id) {
            const catImage = document.createElement('img');
            catImage.src = `https://cataas.com/cat/${catData._id}`;
            catImage.alt = 'Random Cat displayed on screen.';
            catImageContainer.appendChild(catImage);
        }
    })
    .catch((error) => {
        console.error('Error fetching cat image:', error);
    });
}