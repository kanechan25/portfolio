import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/ja';

import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/ja';

import { getFlattenedMessages } from 'src/utils/languageUtils';
import { languageSelector } from 'src/redux/selectors';

const messages = getFlattenedMessages();

function IntlProviderWrapper({ children }) {
    const language = useSelector(languageSelector);
    return (
        <IntlProvider locale={language} messages={messages[language]}>
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
