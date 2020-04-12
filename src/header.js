import React, {Component} from 'react';
import './App.css';
import './slideshow.css';
import logo from './logo_2020.png';
import { Slide } from 'react-slideshow-image';
import bolognese from './images/bolognese.jpg';
import carbonara from './images/carbonara.jpg';
import formaggio from './images/formaggio.jpg';
import oxfile from './images/oxfile.jpg';
import pesto from './images/pesto.jpg';
import seafood from './images/seafood.jpg';

class Header extends Component {  

  render() {
    
    return (
      <div className="Header">
        <Slideshow />
        <div className="logo-container"><img className="logo" src={logo} alt="Logo" /></div>
        
      </div>
    
    )
  }

}

export default Header;

const slideImages = [
  require('./images/IMG_8920.jpg'),
  require('./images/IMG_9408.jpg')
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={bolognese} alt="Logo" />
          </div>
        </div>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={carbonara} alt="Logo" />
          </div>
        </div>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={formaggio} alt="Logo" />
          </div>
        </div>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={oxfile} alt="Logo" />
          </div>
        </div>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={pesto} alt="Logo" />
          </div>
        </div>
        <div className="each-slide">
          <div >
            <img className="header-pic" src={seafood} alt="Logo" />
          </div>
        </div>
      </Slide>
    </div>
  )
}