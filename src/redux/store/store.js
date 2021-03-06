import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { LoginReducer } from "../reducers/LoginReducer";
import { ErrorReducer } from "../reducers/ErrorReducer";
import { ProductsReducer } from "../reducers/ProductsReducer";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login: LoginReducer,
    error: ErrorReducer,
    products: ProductsReducer
});

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk))
);