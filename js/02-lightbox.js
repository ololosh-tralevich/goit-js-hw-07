import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector("ul.gallery");
const pictures = galleryItems
  .map(
    (picture) => `<a class="gallery__item" href="${picture.original}">
    <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
  </a>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", pictures);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
