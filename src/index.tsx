import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {RecoilRoot} from "recoil";

import {App} from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <StrictMode>
        <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </RecoilRoot>
    </StrictMode>,
);
