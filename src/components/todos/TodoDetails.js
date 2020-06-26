import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect, NavLink } from 'react-router-dom'
import moment from 'moment';
import { delTodo } from '../../store/actions/todoActions';


function TodoDetails(props) {
    const { todo, auth, id } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (todo) {
        return (
            <NavLink to='/'>
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{todo.title}</span>
                            <p>{todo.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {todo.firstName} {todo.lastName}</div>
                            <div>{moment(todo.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const todos = state.firestore.data.todos;
    const todo = todos ? todos[id] : null;
    return {
        id: id,
        todo: todo,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delTodo: (id) => dispatch(delTodo(id))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'todos'
    }])
)(TodoDetails)
