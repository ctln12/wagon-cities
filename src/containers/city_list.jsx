import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  componentWillMount() {
    // TODO: dispatch an action to load cities!
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
