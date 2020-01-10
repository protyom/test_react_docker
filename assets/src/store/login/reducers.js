import {GET_USER_DATA, GET_USER_DATA_ERROR, GET_USER_DATA_SUCCESS} from "./actions";

const initialState = {
    error: '',
    token: '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
            };
        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
            };
        case GET_USER_DATA_ERROR:
            return {
                ...state,
            };
        default:
            return state
    }
}

export default reducer