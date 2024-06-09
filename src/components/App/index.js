// import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "src/components/Menu";
import Home from "src/components/Home";
import Recipe from "src/components/Recipe";
import Error from "../Error";
import Loading from "./Loading";
import { fetchRecipes } from "../../actions/recipes";
import { Routes, Route } from "react-router-dom";

import "./style.scss";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.recipes.isLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// App.propTypes = {
//   loading: PropTypes.bool,
// };

// App.defaultProps = {
//   loading: false,
// };

export default App;
