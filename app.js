import Store from './services/Store.js'
import Router from './services/Router.js'
import { loadData } from './services/Menu.js'

window.app = {}
app.store = Store;
app.router = Router;


// It's better to wait for the event for manipulation
// Used as a initializer for the whole application
window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    loadData();
});

const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }