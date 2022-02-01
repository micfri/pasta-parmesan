import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import menu from './pp-menu.json';

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
      <div className="RestaurantMenu page-component">
        <div className="menu-container">
          <div className="page-title-container"><h1>Meny</h1></div>
          {this.state.menu.map(item => (
            <div className="menu-entry-container">
              <h2>{item.title}</h2>
              <div className="box-250">
                <p>{item.description}</p>
              </div>
              <p>{item.standard} kr</p>
              <p>Plus-meny: {item.plus} kr</p>
            </div>
          ))}
        </div>
        <div className="col-2 menu-extras">
          <div className="menu-extras-item">
            <h2 className="bold">Extra tillval</h2>
            <p>Vitlökssås 9kr</p>
            <p>Parmesan 7kr</p>
          </div>
          <div className="menu-extras-item">
            <h2 className="bold">Allergier</h2>
            <p>Fråga!</p>
            <p>Vi försöker anpassa oss men det kan ta en minut extra för dig.</p>
          </div>

        </div>
        
      </div>
    );    
  }

}

export default RestaurantMenu;