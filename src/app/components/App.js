import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

import { Login } from './Login';
import { Main } from './Main';

export class App extends Component{
  constructor(){
    super();
    this.state = {showLogin:true};
    g.App = this;
  }
  setShowLogin = (x) => {
    this.setState({showLogin:x});
  }
  render() {
    if (this.state.showLogin) {
      return(<Login/>)
    } else {
      return(<Main />)
    }
  }
}
