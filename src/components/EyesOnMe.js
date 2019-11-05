// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {

  hey = () => {
    console.log('Hey! Eyes on me!');
  }
  render(){
    return(
      <button type="password" onKeyUp={console.log('Entering password...')}> </button>
    )
  }
}
