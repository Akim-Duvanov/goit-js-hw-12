import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {hideLoadMoreButton} from './render-functions.js';
export {getImagesByQuery};

const limit = 15;

async function getImagesByQuery(query, page) {
    const searchParams = new URLSearchParams({
        key: '50857133-3b0b39e0288c55ff632440828',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: limit
    });

    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
        const totalPages = Math.ceil(response.data.totalHits / limit);
		if(response.data.hits.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return null;
        } else { 
            if(page >= totalPages) {
                iziToast.warning({
                    title: 'warning',
                    message: "We're sorry, but you've reached the end of search results.",
                });
                hideLoadMoreButton();
            }
            return response.data.hits;
        } 
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: `message: ${error.message}`,
        });
        return null;
    }
}