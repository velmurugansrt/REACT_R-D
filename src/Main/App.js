/* Dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Redux import */
import { Provider } from 'react-redux';
import configureStore from '../Redux/Store';

/* Pages import */
import ClickPage from '../Pages/ClickPage';
import Loader from '../Component/Loader';

/* Component import */
import BaseComponent from "./BaseComponent";

/* Varible Declaration */
const store = configureStore();


export default class App extends BaseComponent {
    render() {
        return (<Provider store={store}>
            <Router>
                <div className="MainDiv">
                    <Loader />
                    <Switch>
                        <Route exact path="/" component={ClickPage}/>
                    </Switch>
                </div>
            </Router></Provider>)
    }

}