import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainPage } from './pages/main';

import './index.css';
import { Layout } from './modules/layout';
import { LayoutMainPage } from './modules/lauout-main-page';
import { BookPage } from './pages/book';
import { Terms } from './pages/terms';
import { setupStore } from './store/store';
import { Slider } from './components/slider';
import { MockBook2 } from './constants/constants';
import { Loader } from './components/loader';
import { FormPage } from './pages/form-page';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<LayoutMainPage />}>
              {/* <Route path='/' element={<Navigate to='/books/all' />} /> */}
              <Route path='/books/all' element={<MainPage />} />
              <Route path='/books/:category' element={<MainPage />} />
              <Route path='/terms' element={<Terms contentView='terms' />} />
              <Route path='/contract' element={<Terms contentView='contract' />} />
              <Route path='/profile' element={<Loader />} />
            </Route>
            <Route path='/books/:category/:bookId' element={<BookPage />} />
            <Route path='/' element={<Navigate to='/auth' />} />
            <Route path='/auth' element={<FormPage formType='auth' />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
