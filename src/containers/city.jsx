import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

const City = (props) => {
  const { city } = props;
  return (
    <h3 className="list-group-item">{city.name}</h3>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.city
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
