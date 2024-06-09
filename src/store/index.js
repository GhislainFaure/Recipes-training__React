import { createStore, applyMiddleware, compose } from "redux";
import recipesLoading from "../middlewares/recipes";
import reducer from "src/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(recipesLoading));

const store = createStore(reducer, enhancers);

export default store;
