import { SAVE_RECIPES } from "../actions/recipes";

export const initialState = {
  list: [],
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES: {
      return { ...state, list: action.recipes, isLoading: false };
    }

    default:
      return state;
  }
};

export default reducer;
