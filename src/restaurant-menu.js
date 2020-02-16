import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import menu from './pp-menu.json';
import logo from './logo.jpg';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';
import { timeout } from 'q';

class RestaurantMenu extends Component {

  showSettings (event) {
    event.preventDefault();
    
    
  }


  constructor(props) {
    super(props);
    this.state = {
      menu: [{
        title: " ",
        price: " ",
        description: " "
      }]
    };
  }

  componentDidMount() {
    this.setState({menu: menu.ppmenu});
  }
  render() {
    console.log(this.state.menu);
    
    return (
      <div className="RestaurantMenu">
        <div className="menu-container">
          <div className="page-title-container"><h1>Meny</h1></div>
          {this.state.menu.map(item => (
            <div className="menu-entry-container">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Standard: {item.standard} kr</p>
              <p>Liten: {item.liten} kr</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="bold">Extra tillval</h2>
          <p>Vitlökssås 9kr</p>
          <p>Het salsa 9kr</p>
          <p>Parmesan 6 mån 9kr</p>
          <p>Parmesan 12 mån 12kr</p>
        </div>
        <div>
          <h2 className="bold">Allergier</h2>
          <p>Fråga!</p>
          <p>Vi försöker anpassa oss men det kan ta en minut extra för dig.</p>
        </div>
      </div>
    );    
  }

}

export default RestaurantMenu;