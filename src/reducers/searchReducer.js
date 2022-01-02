import { SEARCH_CONTENT, RESULT_FILTER_DATE, RESULT_FILTER_NAME, SET_PAGE, TURN_PAGE,SET_RESULT } from "../actions/type";
import { sort_by } from "../services/sort";

const initialState = {
  books: [],
  search: "",
  loading: false,
  pages: 0,
  current_page: 1,
  sort:0 // 0 no, 1 name, 2 date
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_CONTENT:
      return {
        ...state,
        search: payload,
        loading: true,
      };
      case SET_RESULT:
      return {
        ...state,
        loading: false,
        sort:0,
        books: payload,
      };
    case RESULT_FILTER_DATE:
      let dateFille = state.books.sort(sort_by("first_publish_year", false, parseInt));;
      return {
        ...state,
        loading: false,
        sort:2,
        books: dateFille,
      };
    case RESULT_FILTER_NAME:
      let nameFilter = state.books.sort(sort_by("title", false, (a) =>  a.toUpperCase()));
      return {
        ...state,
        loading: false,
        sort:1,
        books: nameFilter,
      };
    case SET_PAGE:
      return {
        ...state,
        pages: Math.floor(payload / 15),
      };
    case TURN_PAGE:
      if (payload >= 0 && payload <= state.pages) {
        return {
          ...state,
          current_page:payload
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
