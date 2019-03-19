const initState = {
    authError: null
}

const authReducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case 'LOGIN_ERROR':
            console.log( 'case login error', 'Failed' );
            return {
                ...state,
                authError: 'Login Failed!'
            }
        case 'LOGIN_SUCCESS':
            console.log( 'case login success', 'Success' );
            return {
                ...state,
                authError: 'Login Successfully!'
            }
        case 'SIGNOUT_SUCCESS' :
            console.log( 'case log out success', 'Success' );
            return state;
        default:
            return state;
    }
}

export default authReducer;