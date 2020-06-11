import { SEARCH_NEWS, FETCH_NEWS } from '../actions/types';

const initialState = {
	text: '',
	news: [],
    loading: false,
    article:[]
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
			};
		default:
			return state;
	}
}
