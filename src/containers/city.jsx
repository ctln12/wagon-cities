import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

const City = (props) => {
  const { city, activeCity } = props;
  const handleClick = () => {
    props.setActiveCity(city);
  };
  let classes = "list-group-item";
  if (city === activeCity) {
    classes += " active-city";
  }
  return (
    <h3 className={classes} onClick={handleClick}>{city.name}</h3>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
