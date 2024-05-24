import API from './API.js'

export async function loadData() {
    const data = API.fetchMenu();
    app.store.menu = data;
}
