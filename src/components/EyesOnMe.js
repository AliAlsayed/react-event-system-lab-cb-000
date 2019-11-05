// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {
  render(){
    return(
      <button type="password" onKeyUp={console.log('Entering password...')}> </button>
    )
  }
}
