import API from './services/API.js'

export async function loadData() {
    const data = await API.fetchMenu();
    app.store.menu = menu;
}


