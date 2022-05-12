import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const pictureMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend" , pictureMarkup)


function createGalleryMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      
      return `
      <div class="gallery__item">
         <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
      </div>
      `
   }).join('')
}


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
lightbox.on('show.SimpleLightbox', function () {
   
})
console.log(galleryItems);
