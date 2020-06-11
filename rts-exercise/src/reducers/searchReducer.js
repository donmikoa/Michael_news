import { SEARCH_NEWS, FETCH_NEWS, LOADING } from '../actions/types';

const initialState = {
	text: '',
	news: [],
	loading: false,
	article: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_NEWS:
			return {
				...state,
				text: action.payload,
				loading: false,
			};
		case FETCH_NEWS:
			return {
				...state,
				news: action.payload,
				loading: false,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
