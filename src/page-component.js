import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import logo from './logo.jpg';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';
import RestaurantMenu from './restaurant-menu.js';
import About from './about.js';
import OpeningHours from './opening-hours.js';
import Contact from './contact.js';
import { log } from 'util';

class PageComponent extends Component {

  components = {
    "": RestaurantMenu,
    meny: RestaurantMenu,
    oppettider: OpeningHours,
    kontakt: Contact,
    var_resa: About
  };

  render() {
    const ComponentName = this.components[this.props.id ];
    return <ComponentName />
  }

}

export default PageComponent;