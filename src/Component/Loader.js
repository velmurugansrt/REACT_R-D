/* Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Component import */
import BaseComponent from "../Main/BaseComponent";
import { GlobalActions } from '../Redux/Actions'

/* Assets Import */
import loaderImage from '../Assets/Images/loaderImage.gif'
import './loader.css';


class LoaderComponent extends BaseComponent {

    state = {
        loader: 'Loader Off'
    }

    componentWillReceiveProps(nexprops) {
        this.setState({ loader: nexprops.loader })
        setTimeout(function () {
            this.props.LOADER("Loader off")
        }.bind(this), 3000);
    }
    render() {
        return (this.state.loader == "Loader on" ? (<div className="loaderWrap"><img src={loaderImage} style={{ width: 100, height: 100 }}></img></div>) : null)
    }

}
function mapStateToProps(state) {
    const { loader } = state.GlobalReducer;
    return {
        loader
    };
}

export default connect(mapStateToProps, { ...GlobalActions })(LoaderComponent);