import * as types  from '../Constants/ActionTypes'

export function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType,
    title
  };
}
