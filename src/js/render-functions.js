import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton};

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".load-more");
const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });

function createGallery(images) {
    gallery.insertAdjacentElement("beforeend", images.map(elem => `
        <li class="gallery-item">
            <a class="gallery-link" href=${elem.largeImageURL}>
                <img
                    class="gallery-image"
                    src="${elem.webformatURL}"
                    alt="${elem.tags}"
                />
                <ul class="card-info">
                    <li>likes:${elem.likes}</li>
                    <li>views:${elem.views}</li>
                    <li>comments:${elem.comments}</li>
                    <li>downloads:${elem.downloads}</li>
                </ul>
            </a>
        </li>
    `).join(""));
    lightbox.refresh();
}
    
function clearGallery() {
    gallery.innerHTML = '';
    lightbox.refresh();
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

function showLoadMoreButton() {
    loadMore.classList.remove("hidden");
}

function hideLoadMoreButton() {
    loadMore.classList.add("hidden");
}