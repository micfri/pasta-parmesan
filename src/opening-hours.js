import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import logo from './logo.jpg';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';

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
        <div className="box-250">Ni hittar oss på Järnvägsgatan 18 i Markaryd, här är våra öppettider:</div>
        <div>
          <h3>Måndag - Fredag</h3>
          <h3>11.30 - 13:30</h3>
        </div>

       
      </div>
    );    
  }

}

export default OpeningHours;