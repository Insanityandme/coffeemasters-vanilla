import Store from './services/Store.js'
import Router from './services/Router.js'
import {loadData} from './services/Menu.js'

// Link my Web Components
import MenuPage from "./components/MenuPage.js";
import OrderPage from "./components/OrderPage.js";
import DetailsPage from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js"
import CartItem from "./components/CartItem.js";

window.app = {}

// Define/Register my Custom Elements/Web Components
// Doing this prevents us from forgetting to import them
customElements.define("product-item", ProductItem);
customElements.define("details-page", DetailsPage);
customElements.define("menu-page", MenuPage);
customElements.define("order-page", OrderPage);
customElements.define("cart-item", CartItem);

const $ = function (args) {
  return document.querySelector(args);
}
const $$ = function (args) {
  return document.querySelectorAll(args);
}
HTMLElement.prototype.on = function (a, b, c) {
  return this.addEventListener(a, b, c);
}
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
}
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
}
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
}

app.store = Store;
app.router = Router;

// It's better to wait for the event for manipulation
// Used as an initializer for the whole application
window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
  loadData();
});

window.addEventListener("appcartchange", event => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0)
  badge.textContent = qty;
  badge.hidden = qty == 0;
})