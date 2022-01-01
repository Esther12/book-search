import {SEARCH_CONTENT,RESULT_FILTER_DATE} from './type';

export const searchContent = (data) => {
  return {type:SEARCH_CONTENT, payload:data};
}

export const searchResultByDate = (data) => {
  return {type:RESULT_FILTER_DATE, payload:data};
}