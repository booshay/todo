import React, { Component } from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TodoList from '../todos/TodoList';
import { Redirect } from 'react-router-dom'
import Notifications from '../notifications/Notifications';

class Dashboard extends Component {

    render() {
        const { todos, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TodoList delTodo={this.props.delTodo} todos={todos} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todos', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);
