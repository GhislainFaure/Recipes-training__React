import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const getIsActive = ({ isActive }) =>
    isActive ? "menu-link menu-link--active" : "menu-link";

  return (
    <nav className="menu">
      <NavLink className={getIsActive} to="/">
        Accueil
      </NavLink>
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={getIsActive}
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
