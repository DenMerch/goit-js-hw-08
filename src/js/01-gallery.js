// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const gallareEl = document.querySelector(".gallery");
function markup(items) {
    return items.map(item => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"  />
</a>`).join("");

};
const createdGalary = markup(galleryItems);
gallareEl.insertAdjacentHTML("beforeend", createdGalary);
let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });