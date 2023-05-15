import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import {App} from './App';

import {store} from './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </Provider>
    </StrictMode>,
);
