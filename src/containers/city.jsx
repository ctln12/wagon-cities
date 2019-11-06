import React from 'react';

const City = (props) => {
  const { city } = props;
  return (
    <h3 className="list-group-item">{city.name}</h3>
  );
};

export default City;
