// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from "react-router-dom"; 
import "./scss/volt.scss";
import  { Toaster } from 'react-hot-toast';

// vendor styles
import "react-datetime/css/react-datetime.css";
import "./custom.css"

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Toaster/>
      <ScrollToTop />
      <HomePage />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
