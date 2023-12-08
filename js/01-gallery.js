import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');

const markupList = galleryItems.map(({ preview, original, description }) => {
    return `<li>
        <a class="gallery__link" href=${original}>
            <img
            class='gallery__image'
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"
            />
        </a>
    </li>`;
});
galleryList.insertAdjacentHTML("beforeend", markupList.join(''));

function imageClicking(event) {
    event.preventDefault();
    const target = event.target.classList.contains('gallery__image');
    if (!target) {
        return;
    };
    const originalImage = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${originalImage}" width="800" height="600">`, {
        onShow: instance => {
            window.addEventListener('keydown', (event) => {
                if (event.code !== 'Escape') {
                    return;
                };
                instance.close();
            });
        },
        onClose: instance => {
            window.removeEventListener('keydown', (event) => {
                if (event.code !== 'Escape') {
                    return;
                };
                instance.close();
            });
        },
    });
    instance.show();
};

galleryList.addEventListener('click', imageClicking);
