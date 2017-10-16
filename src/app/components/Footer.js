import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

export class Footer extends Component{
  render(){
    return (
        <div className="col-lightgrey mt16px">
            <center> *** {g._name} *** </center>
        </div>
    )
  }
}
