const initState = {
    posts: [
        {
            id: 1,
            postAuthor: 1,
            postTitle: 'Hello World blog title 1',
            postContent: 'hello <b>world</b> blog content 1....',
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'hello-world-blog-title-1'
        },
        {
            id: 2,
            postAuthor: 1,
            postTitle: 'Hello World blog title 2',
            postContent: 'hello world blog content 2....',
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'hello-world-blog-title-2'
        },
        {
            id: 3,
            postAuthor: 1,
            postTitle: 'Hello World blog title 3',
            postContent: 'hello world blog content 3....',
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'hello-world-blog-title-3'
        },
        {
            id: 4,
            postAuthor: 1,
            postTitle: 'Hello World blog title 4',
            postContent: 'hello world blog content 4....',
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'hello-world-blog-title-4'
        },
        {
            id: 5,
            postAuthor: 1,
            postTitle: 'Hello World blog title 5',
            postContent: 'hello world blog content 5....',
            postDate: new Date(),
            postStatus: 'publish',
            postUrl: 'hello-world-blog-title-5'
        },
    ]
}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.payload);
            return state;

        case 'CREATE_POST_ERROR':
            console.log('created post error', action.payload);
            return state;

        default:
            return state;
    }
}

export default blogReducer;