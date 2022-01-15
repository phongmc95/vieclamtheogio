import {SEARCH_SUCCESS, SEARCH_CLEAR} from '../actions/type/Type';

const initialState = {
  search: '',
  history: [],
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        search: action.search,
        history: [...state.history, action.search],
      };

    case SEARCH_CLEAR:
      return {
        ...state,
        history: [],
      };

    default: {
      return state;
    }
  }
};
export default Search;
