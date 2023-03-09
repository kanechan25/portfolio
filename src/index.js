import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import App from './App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IntlProviderWrapper from './hoc/IntlProviderWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyles>
                    <IntlProviderWrapper>
                        <App />
                    </IntlProviderWrapper>
                </GlobalStyles>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
