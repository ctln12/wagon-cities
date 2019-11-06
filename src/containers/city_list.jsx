import React from 'react';
import City from './city';

const CityList = (props) => {
  const { cities } = props;
  return (
    <div className="cities">
      {cities.map(city => <City city={city} key={city.name} />)}
    </div>
  );
};

export default CityList;
