/* Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Component import */
import BaseComponent from "../Main/BaseComponent";

/* Assets Import */
import clickButton from '../Assets/Images/clickButton.png'

/* Pages import */
import { GlobalActions } from '../Redux/Actions';


class ClickPage extends BaseComponent {

  render() {
    return (<div style={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <img src={clickButton} style={{ width: 70, height: 70 }} onClick={() => this.props.LOADER("Loader on")} />
    </div>
    )
  }

}

function mapStateToProps(state) {
  const { loader } = state.GlobalReducer;
  return {
    loader
  };
}

export default connect(mapStateToProps, { ...GlobalActions })(ClickPage);
