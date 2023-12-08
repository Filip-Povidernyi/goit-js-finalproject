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
            alt="${description}"
            />
        </a>
    </li>`;
});
galleryList.insertAdjacentHTML("beforeend", markupList.join(''));

var lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });