import React, { Component } from 'react'
import { connect } from 'react-redux';
import { delTodo } from '../../store/actions/todoActions';


function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delTodo: (id) => dispatch(delTodo(id))
    };
}

class TodoList extends Component {
    render() {
        let todos = this.props.todos;
        let todoList = '';
        if (todos) {
            todoList = todos.map((e) => {
                return (
                    <div key={e.id} className="">
                        <div className="">
                            <div className="card-panel blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{e.title}</span>
                                    <p>{e.content}</p>
                                </div>
                                <div className="card-action">
                                    <button onClick={() => this.props.delTodo(e.id)} className="btn btn-flat orange darken-3">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoList);

/*
import React, { Component } from 'react';
import { compose } from 'redux';


const TodoList = ({ todos, delTodo }) => {
    let todoList = todos;
    console.log(delTodo)
    if (todos) {
        todoList = todos.map((e) => {
            return (
                <div key={e.id} className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{e.title}</span>
                                <p>{e.content}</p>
                            </div>
                            <div className="card-action">
                                <button onClick={this.delTodo} className="btn btn-flat orange darken-3">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    }



    return (
        <div>
            {todoList}
        </div>
    )
}

export default TodoList

*/