import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

export class Header extends Component{
  render(){
    return (
        <div>
            <div className="row">
                <span className="col welcome">
                    Welcome <b>{g.user}</b>
                </span>
                <span className="float-right mr16px">
                    <button type="button" className="btn btn-success" id="logoutbutton" onClick={g.Login.doLogout}>Logout</button>
                </span>
            </div>
        </div>
    )
  }
}
