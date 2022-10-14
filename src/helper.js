import store from './store';

export const can = (permission) => {
    const state = store.getState();
    const users = state.users;

    return `${users.toString()}`;
}