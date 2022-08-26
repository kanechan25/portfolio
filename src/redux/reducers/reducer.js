import actionTypes from '../actions/actionTypes';

const initialState = {
    language: 'en',
    theme: 'dark',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            console.log('you have switched language: ', action.language);
            return {
                ...state,
                language: action.language,
            };
        default:
            return state;
    }
};

export default rootReducer;
