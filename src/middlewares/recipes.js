import axios from "axios";
import { FETCH_RECIPES, saveRecipes } from "../actions/recipes";

const recipesLoading = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      const loadData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/recipes");
          const recipes = response.data;
          store.dispatch(saveRecipes(recipes));
        } catch (error) {
          console.log(error, "le serveur a eu un problème");
        }
      };
      loadData();
    }
    default:
      next(action);
  }
};

export default recipesLoading;
