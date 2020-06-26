import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions';
import { Redirect } from 'react-router-dom'

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    };
}

class AddTodo extends Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = ((e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.props.history.push('/');
    })

    handleChange = ((e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    })

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <div onChange={this.handleChange} className="input-form"><label htmlFor="title">Title</label><input type="text" id="title" /></div>
                    <div onChange={this.handleChange} className="input-form"><label htmlFor="content">Content</label><input type="text" id="content" /></div>
                    <button className="btn orange white-text darken-4 btn-flat" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(AddTodo);