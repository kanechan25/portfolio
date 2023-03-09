export const toggleTheme = (theme) => {
    return {
        type: 'THEME',
        payload: theme,
    };
};

export const switchLang = (language) => {
    return {
        type: 'SWITCH_LANGUAGE',
        payload: language,
    };
};
