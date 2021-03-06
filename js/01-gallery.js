// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.



import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const pictureMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend" , pictureMarkup)
galleryContainer.addEventListener("click", onGalleryContainerClick)

function createGalleryMarkup(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
      
   return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
   }).join('')
}

function onGalleryContainerClick(event) {
   event.preventDefault()
   const swatchEl = event.target;
   const isGallerySwatchEl = swatchEl.nodeName !== ("IMG")
   if (isGallerySwatchEl) {
      return
   }

   const largeImgLink = swatchEl.dataset.source
   

   basicLightbox.create(`
      <img width = "1400" height = "900" src = "${largeImgLink}">
   `).show()


}






