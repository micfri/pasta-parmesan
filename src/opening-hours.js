import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';

class OpeningHours extends Component {

  showSettings (event) {
    event.preventDefault();
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="OpeningHours page-component">        
        <div className="page-title-container"><h1>Öppettider</h1></div>
        <h3>Måndag - Fredag: 11.30-13.30</h3>

       
      </div>
    );    
  }

}

export default OpeningHours;