import actionTypes from './actionTypes';

export const changeLanguageApp = (language) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language,
    };
};
