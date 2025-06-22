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
        const images = await getImagesByQuery(queryStorage, pageCounter);
        if(images.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images);
            showLoadMoreButton();
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
        const images = await getImagesByQuery(queryStorage, pageCounter);
        if(images.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images);
            showLoadMoreButton();
        }
    } catch {
        iziToast.error({
            title: 'Error',
            message: 'failed to fetch images',
        });
    }
    hideLoader();
}