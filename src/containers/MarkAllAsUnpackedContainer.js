import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markAllAsUnpacked } from '../actions/items-actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ markAllAsUnpacked }, dispatch);
};

export default connect(null, mapDispatchToProps)(({ markAllAsUnpacked }) => (
  <button className="full-width" onClick={markAllAsUnpacked}>
    Mark All as Unpacked
  </button>
));