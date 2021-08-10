import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { CoffeePlacesReducer } from "./components/CoffeePlaces/reducer/CoffeePlacesReducer";

const middleware = [thunk];
const store = createStore(
  combineReducers({
    CoffeePlaces: CoffeePlacesReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
