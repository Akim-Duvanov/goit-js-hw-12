import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from './js/render-functions.js';
import {getImagesByQuery} from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import './css/styles.css';

const form = document.querySelector(".form");
const queryCatcher = form.elements["search-text"];
const loadMore = document.querySelector(".load-more");
let pageCounter = 1;
let queryStorage = '';
const limit = 15;

form.addEventListener("submit", handleSubmit);
loadMore.addEventListener("click", handleClick);

async function handleSubmit(event) {
    event.preventDefault();
    pageCounter = 1;
    if(queryCatcher.value.trim() === "") {
        iziToast.warning({
            title: 'Warning',
            message: 'empty query',
        });
        return;
    } 
    queryStorage = queryCatcher.value.trim();
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const {images, totalHits} = await getImagesByQuery(queryStorage, pageCounter);
        const totalPages = Math.ceil(totalHits / limit);
        if(images.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images);
            showLoadMoreButton();
            if(page >= totalPages) {
                iziToast.warning({
                    title: 'warning',
                    message: "We're sorry, but you've reached the end of search results.",
                });
                hideLoadMoreButton();
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'failed to fetch images',
        });
        return null;
    }
    hideLoader();
}

async function handleClick(event) {
    event.preventDefault();
    pageCounter += 1;
    hideLoadMoreButton();
    showLoader();
    try {
        const {images, totalHits} = await getImagesByQuery(queryStorage, pageCounter);
        const totalPages = Math.ceil(totalHits / limit);
        if(images.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images);
            showLoadMoreButton();
            if(page >= totalPages) {
                iziToast.warning({
                    title: 'warning',
                    message: "We're sorry, but you've reached the end of search results.",
                });
                hideLoadMoreButton();
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'failed to fetch images',
        });
    }
    hideLoader();
}