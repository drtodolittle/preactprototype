import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

import { Header } from './Header';
import { Footer } from './Footer';
import { Todos } from './Todos';

export class Main extends Component{
    constructor(){
        super();
        g.Main = this;
    }
    componentDidMount(){
        $('#logoutbutton').focus();
    }
    render(){
        return(
          <div>
            <Header />
            <Todos />
            <Footer />
          </div>
        )
    }
}
