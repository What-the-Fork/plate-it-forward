import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './ui/App.jsx'
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    )