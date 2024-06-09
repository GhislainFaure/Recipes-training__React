/* eslint-disable arrow-body-style */
// == Import : npm
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { findRecipe } from "src/selectors/recipes";

// == Import : local
// Composants
import Page from "src/components/Page";
import AppHeader from "src/components/AppHeader";
import Header from "./Header";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// Style
import "./style.scss";

// == Composant
function Recipe() {
  const { slug } = useParams();
  console.log(slug);
  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  useEffect(() => {
    window.scroll(0, 0);
  }, [recipe]);

  if (!recipe) {
    return <Navigate to="/error" replace={true} />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
