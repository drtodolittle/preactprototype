import { h, render, Component } from 'preact';

/** @jsx h */

import g from '../glb';

class SingleTodo extends Component {
    render(){
        if(this.props.done){
            return(
                <li className="list-group-item" id={this.props.id}>
                    <span className="float-left">{this.props.topic}</span>
                    <span className="float-right octicon octicon-check col-green"></span>
                </li>
            )
        } else {
            return(
                <li className="list-group-item" id={this.props.id}>
                <span className="float-left">{this.props.topic}</span>
                </li>
            )
        }
    }
}

export class Todos extends Component {
    constructor(){
        super();
        this.state = {
            todos : []
        }
        g.Todos = this;
    }

    getTodos = () => {
        $.ajax({
            url : "https://api.drtodolittle.de/api/todos",
            type : "GET",
            dataType : "json",
            beforeSend : function(xhr){
                xhr.setRequestHeader('Authorization', g.fbtoken);
            },
            success : function(resp){
                g.Todos.setState({todos:resp});
            },
            error : function(resp){
                console.log("Request error");
                console.log(resp.errorMessage);
            }
        });
    }

    componentDidMount = () => {
        this.getTodos();
    }

    render(){
        return(
            <div>
                <ul className="list-group mt16px">
                {
                    this.state.todos.map(
                        todo => (
                            <SingleTodo id={todo.id} topic={todo.topic} done={todo.done} />
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}
