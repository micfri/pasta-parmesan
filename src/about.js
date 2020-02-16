import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import logo from './logo.jpg';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';

class About extends Component {

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
      <div className="About page-component">
       
        <div className="page-title-container"><h1>Vår resa</h1></div>
        <div>
          <p>Pasta & Parmesan är en foodtruck som just nu finns i Markaryd i södra Sverige. Här lagar vi schysst pasta med goda pastasåser från grunden. Här finns något för alla - en vegansk pasta pesto med svamp eller en oxfilépasta för finsmakaren eller kanske en räkpasta med handpillade räkor till dig som inte gillar kött eller inte är förtjust i gräddiga såser.</p>
          <p>Pasta Parmesan startades i april 2020 av grundaren Olivia Fritiofsson som spontant åkte och köpte foodtrucken i Hässleholm en solig söndag i oktober. Det hela filmades och klipptes ihop till korta videor som går att se på hennes YouTube-kanal "Olivia Fritiofsson". På kanalen publicerar hon även nya videos där man får följa med henne i vardagen som foodtrucker och möta problemen som uppstår för att sedan se hur allting går även om det verkar omöjligt ibland.</p>
          <p>Hoppas vi ses, i foodtrucken eller på YouTube </p>
          <p>MÅNGA KRAMAR</p>
          <p>från Olivia</p>
        </div>
      </div>
    );    
  }

}

export default About;


const MenuList = ({ list }) => (
  <Menu pageWrapId={ "page-wrap"}>
    {list.map(menuItem => (
      <a id={menuItem.id} className="menu-item" href={"/" + menuItem.id}>{menuItem.title}</a>
    ))}
  </Menu>
);