import { SEARCH_NEWS, FETCH_NEWS, LOADING } from './types';
import axios from 'axios';

export const searchNews = (text) => (dispatch) => {
	dispatch({
		type: SEARCH_NEWS,
		payload: text,
	});
};

export const fetchNews = (text) => (dispatch) => {
	axios
		.get(`http://hn.algolia.com/api/v1/search?tags=story&query=${text}`)
		.then((response) =>
			dispatch({
				type: FETCH_NEWS,
				payload: response.data.hits,
			})
		)
		.catch((err) => console.log(err));
};

export const setLoading = () => {
	return {
		type: LOADING,
	};
};
