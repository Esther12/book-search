import {SEARCH_CONTENT,RESULT_FILTER_DATE,TURN_PAGE,SET_PAGE,SET_RESULT,RESULT_FILTER_NAME,CURRENT_BOOKS} from './type';

export const searchContent = (data) => {
  return {type:SEARCH_CONTENT, payload:data};
}
export const searchResultByDate = (data) => {
  return {type:RESULT_FILTER_DATE, payload:data};
}
export const searchResultByName = (data) => {
  return {type:RESULT_FILTER_NAME, payload:data};
}
export const searchResult = (data) => {
  return {type:SET_RESULT, payload:data};
}
export const setPageTotal = (data) => {
  return {type:SET_PAGE, payload:data};
}
export const turnPage = (data) => {
  return {type:TURN_PAGE, payload:data};
}
export const currentBooks = (data) => {
  return {type:CURRENT_BOOKS, payload:data};
}