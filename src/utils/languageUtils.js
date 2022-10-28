import messages_ja from '../languages/ja.json';
import messages_en from '../languages/en.json';

const flattenMessages = (nestedMessages, prefix = '') => {
    if (nestedMessages == null) {
        return {};
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value });
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
};

const messages = {
    ja: flattenMessages(messages_ja),
    en: flattenMessages(messages_en),
};

function getMessageByKey(key, lang) {
    return messages[lang][key];
}
function getFlattenedMessages() {
    return messages;
}

export { getMessageByKey, getFlattenedMessages };
