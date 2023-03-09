const initialState = {
    language: 'en',
    theme: true,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                language: action.payload,
            };
        case 'THEME':
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
