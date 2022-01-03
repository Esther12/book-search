import { SEARCH_CONTENT, RESULT_FILTER_DATE, RESULT_FILTER_NAME, SET_PAGE, TURN_PAGE,SET_RESULT,CURRENT_BOOKS } from "../actions/type";
import { sort_by } from "../services/sort";

const initialState = {
  books: [],
  search: "",
  loading: false,
  pages: 0,
  current_page: 0,
  current_books:[],
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
        current_page:0,
        current_books:payload.slice(0,20)
      };
    case RESULT_FILTER_DATE:
      let dateFille = state.books.sort(sort_by("first_publish_year", false, parseInt));;
      return {
        ...state,
        loading: false,
        sort:2,
        books: dateFille,
        current_page:0,
        current_books:dateFille.slice(0,20)
      };
    case RESULT_FILTER_NAME:
      let nameFilter = state.books.sort(sort_by("title", false, (a) =>  a.toUpperCase()));
      return {
        ...state,
        loading: false,
        sort:1,
        books: nameFilter,
        current_page:0,
        current_books:nameFilter.slice(0,20)
      };
    case SET_PAGE:
      return {
        ...state,
        pages: Math.floor(payload / 20),
      };
    case TURN_PAGE:
      if (payload >= 0 && payload <= state.pages) {
        return {
          ...state,
          current_page:payload,
          current_books:state.books.slice(payload*20,payload*20+20)
        };
      } else {
        return state;
      }
      case CURRENT_BOOKS:
        console.log(payload,"payload")
        return {
          ...state,
          current_page:payload,
          current_books:state.books.slice(payload*20,payload*20+20)
        };
    default:
      return state;
  }
}
