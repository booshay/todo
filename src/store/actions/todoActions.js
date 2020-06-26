export const addTodo = (todo) => {
    return (dispatch, getState, { getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            ...todo,
            firstName: profile.firstName,
            lastName: profile.lastName,
            createdAt: new Date(),
            authId: authId
        }).then(() => {
            dispatch({ type: 'ADD_TODO', todo })
        }).catch((err) => {
            dispatch({ type: 'ADD_TODO_ERROR', err })
        })
    }
}

export const delTodo = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('todos').doc(id).delete().then(() => {
            dispatch({ type: 'DEL_TODO', id })
        }).catch((err) => {
            dispatch({ type: 'DEL_TODO_ERROR', err })
        })
    }
}