/* Dependencies */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Redux import */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../Redux/Store';

/* Pages import */
import ClickPage from '../Pages/ClickPage';
import Loader from '../Component/Loader';

/* Component import */
import BaseComponent from "./BaseComponent";

/* Varible Declaration */

const { store, persistor } = configureStore();


export default class App extends BaseComponent {


    render() {
        return (<Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <div className="MainDiv">
                        <Loader />
                        <Switch>
                            <Route exact path="/" component={ClickPage} />
                        </Switch>
                    </div>
                </Router>
            </PersistGate>
        </Provider>)
    }

}