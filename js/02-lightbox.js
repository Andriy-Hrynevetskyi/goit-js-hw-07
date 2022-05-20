import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `<li class="gallery__list__item">
  <a class="gallery__item" href=${original}>
    <img
      class= "gallery__image"
      src= ${preview}
      alt= "${description}">
      
  </a>
</li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
