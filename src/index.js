import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {MyModulesContextProvider} from './store/myModulesContext';


ReactDOM.render(
    <MyModulesContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MyModulesContextProvider>,
    document.getElementById('root')
);