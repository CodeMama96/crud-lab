import React, { Component } from 'react';
import {connect} from 'react-redux'

class Restaurants extends Component {

  //renderRestaurants = () => this.props.restaurants.map((rest, id) => <Restaurant key={id} text={rest}/>)
  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

// const rest = props => {
//   return(
//     <li>{props.text}</li>
//   )
// };
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);