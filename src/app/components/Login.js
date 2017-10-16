import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

import { Error } from './Error';

export class Login extends Component{
  constructor() {
    super();
    g.Login = this;
  }
  doLogin = () => {
    var user = $('#user').val();
    var password = $('#password').val();
    if (user!='' && password!=''){
        firebase.auth().signInWithEmailAndPassword(user, password)
        .then(function(response){
            response.getIdToken().then(function(response) {
                $('#err').empty();
                g.fbtoken = "Bearer " + response;
                g.user = user;
                g.App.setShowLogin(false);
            });
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          $('#err').empty();
          var target = document.getElementById('err');
          render(<Error msg={errorMessage} />,target);
        });
    } else {
      $('#err').empty();
      var target = document.getElementById('err');
      render(<Error msg="Enter a valid username (email address) and the corresponding valid password!" />,target);
    }
  }
  doLogout = () => {
    g.user = "";
    firebase.auth().signOut().then(function() {
        g.App.setShowLogin(true);
    }).catch(function(error) {
        var errorMessage = error.message;
        var target = document.getElementById('app');
        render(<Error msg={errorMessage} />,target,target);
    });
  }
  doKeydown = (e) => {
    if(e.keyCode==13){
      e.preventDefault();
      this.doLogin();
    }
  }
  componentDidMount () {
      $('#user').focus();
  }
  render() {
    return(
        <div>
            <div className="row">
                <div className="col-3">
                    <input type="text" className="form-control" placeholder="Email..." id="user" autoFocus onKeyDown={this.doKeydown}></input>
                    <input type="password" className="form-control mt16px" placeholder="Password..." id="password" onKeyDown={this.doKeydown}></input>
                    <button className="btn btn-success mt16px" type="button" onClick={this.doLogin}>Login</button>
                </div>
            </div>
        </div>
    )
  }
}
