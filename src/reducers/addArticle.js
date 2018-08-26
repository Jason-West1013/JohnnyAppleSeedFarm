import { ADD_ARTICLE } from "../constants/action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    default:
      return state;
  }
};
