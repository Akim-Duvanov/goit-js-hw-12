import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
export {getImagesByQuery};

function getImagesByQuery(query) {
    const searchParams = new URLSearchParams({
        key: '50857133-3b0b39e0288c55ff632440828',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });

    return axios.get(`https://pixabay.com/api/?${searchParams}`)
    	.then(response => {
		    if(response.data.hits.length === 0) {
                iziToast.error({
                    title: 'error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return null;
            } else {
                return response.data.hits;
            }
  	    })
  	    .catch(error => {
            iziToast.error({
                title: 'Error',
                message: `message: ${error.message}`,
            });
            return null;
  	    })
}