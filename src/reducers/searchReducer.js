import { SEARCH_CONTENT, RESULT_FILTER_DATE, RESULT_FILTER_NAME } from "../actions/type";

const initialState = {
  books: [],
  search: "",
  loading: false,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_CONTENT:
      return {
        ...state,
        search: payload,
        loading: true,
      };
    case RESULT_FILTER_DATE:
      return {
        ...state,
        loading: false,
        books: payload,
      };
    case RESULT_FILTER_NAME:
      return {
        ...state,
        loading: false,
        books: payload,
      };
    default:
      return state;
  }
}
