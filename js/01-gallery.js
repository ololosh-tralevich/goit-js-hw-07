import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryItemEl = document.getElementsByClassName("gallery__item");
const galleryLinkEl = document.getElementsByClassName("gallery__link");
const galleryPicEl = document.getElementsByClassName("gallery__image");

const listPicsEl = galleryItems
  .map(
    (pic) => `<div class="gallery__item">
                <a class="gallery__link" href="${pic.original}">
                    <img
                    class="gallery__image"
                    src="${pic.preview}"
                    data-source="${pic.original}"
                    alt="${pic.description}"
                    />
                </a>
            </div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", listPicsEl);

for (let i = 0; i < galleryItemEl.length; i++) {
  galleryLinkEl[i].addEventListener("click", function (event) {
    event.preventDefault();
    return false;
  });
  const currentImg = galleryPicEl[i].dataset.source;
  galleryItemEl[i].onclick = () => {
    const instance = basicLightbox.create(
      `<img width="1280" height="720" src="${currentImg}">`
    );
    instance.show();
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") instance.close();
    });
  };
}
