import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
export {getImagesByQuery};

async function getImagesByQuery(query, page) {
    const searchParams = new URLSearchParams({
        key: '50857133-3b0b39e0288c55ff632440828',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15
    });

    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
		if(response.data.hits.length === 0) {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return null;
        } else { 
            const images = response.data.hits;
            const totalHits = response.data.totalHits;
            return { images, totalHits };
        } 
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: `message: ${error.message}`,
        });
        return null;
    }
}