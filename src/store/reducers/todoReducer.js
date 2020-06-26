const initState = {}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('added todo', action.todo);
            return state;
        case 'ADD_TODO_ERROR':
            console.log('error', action.err)
            return state;
        case 'DEL_TODO':
            console.log('deleted todo', action.id)
            return state;
        case 'DEL_TODO_ERROR':
            console.log('error', action.err)
            return state;
        default:
            return state;
    }

}

export default todoReducer