let container = document.getElementById('container');
let gambar = document.getElementById('gambar');
let clickCount = 0;

function tambahGambar() {
    clickCount++;
    if (clickCount === 1) {
        container.classList.remove('background-color')
        gambar.style.display = 'block';
    } else {
        let imageContainer = document.getElementById('image-container');

        if(!imageContainer) {
            imageContainer = document.createElement('div');
            imageContainer.id = 'image-container';
            document.body.appendChild(imageContainer);
        }
        let gambarBaru = document.createElement('img');
        gambarBaru.src = 'image.jpg';
        gambarBaru.alt = 'gambar Tambahan';
        imageContainer.appendChild(gambarBaru);
    }
}