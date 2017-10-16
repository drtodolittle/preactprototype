import { h, render, Component } from 'preact';

/** @jsx h */

export class Error extends Component{
  render(){
    return (
      <div>
        <div className="col-red mb16px">Error : {this.props.msg}</div>
      </div>
    )
  }
}
