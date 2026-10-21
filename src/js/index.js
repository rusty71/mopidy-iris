import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/index';
import App from './App';

require('../scss/app.scss');

const root = createRoot(document.getElementById('app'));

// The path the interface is served from.  The base element carries it (it
// is set when the app is not installed at the root of the domain), so the
// router does not have to guess it from the path: "/iris" would be wrong
// for an app that lives under "/mopidy/iris".
const baseElement = document.getElementById('base_href');
const basename = (baseElement?.getAttribute('href') || '/').replace(/\/+$/, '') || '/';

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
