const createBlogPost = ( post ) => {

    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // async call to the database
        const firestore = getFirestore();
        firestore.collection('blog').add({
            ...post,
            postAuthor: 1,
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'todo-dynamic-url'
        }).then( ( post ) => {
            dispatch({
                type: 'CREATE_POST',
                payload: post,
            })
        }).catch( (err) => {
            console.log('Create Post Error', err );
            dispatch({
                type: 'CREATE_POST_ERROR',
                payload: err,
            })
        })
    }
}

export default createBlogPost;