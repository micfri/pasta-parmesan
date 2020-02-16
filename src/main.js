import React, {Component} from 'react';
import './App.css';
import './burger-menu.css';
import logo from './logo_2020.png';
import { slide as Menu } from 'react-burger-menu';
import resources from './resources.json';
import { Route, Switch } from 'react-router-dom';
import RestaurantMenu from './restaurant-menu.js';
import PageComponent from './page-component.js';

class Main extends Component {

  showSettings (event) {
    event.preventDefault();  
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log(resources.pages);
    
  }

  render() {
    return (
      <div className="Main" id="page-wrap">
        <div className="content-middle">
          <MenuList list={resources.pages}/>
          <div className="top-row">
            <div className="logo-container"><img className="logo" src={logo} alt="Logo" /></div>
          </div>
          <div className="middle-row">
            <Switch >
              <Route exact path={"/"}>
                <PageComponent id={""}/>
              </Route>
              {resources.pages.map(route => (
                  
                <Route path={"/" + route.id}>
                  <PageComponent id={route.id}/>
                </Route> 
              ))}
            </Switch>
          </div>
        </div>
      </div>
    );    
  }

}

export default Main;


const MenuList = ({ list }) => (
  <Menu pageWrapId={"page-wrap"}>
    {list.map(menuItem => (
      <a id={menuItem.id} className="menu-item" href={"/" + menuItem.id}>{menuItem.title}</a>
    ))}
  </Menu>
);

const Routes = ({ list }) => (
  <Switch >
      <div> Switch </div>
      {list.map(route => (
        <Route path="/" component={Example} />
      ))}
  
    
  </Switch>
);

const Example = () => (
    <div>Example</div>

  );
