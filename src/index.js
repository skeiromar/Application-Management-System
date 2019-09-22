import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import {Root} from './root';
import './styles/removeStyles.css';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
        let preLoadedState = {
            entities: 
            {
                users: {
                    [window.currentUser.id] : window.currentUser
                }
            },
                login: {
                    id: [window.currentUser.id]
            }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    ReactDOM.render(<Root store={store}/>, root);
});








// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
