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
import { AuthForm } from './components/form/form-auth';
import { RegistrationForm } from './components/form/form-registration';
import { PrivateRouter } from './router/private-rout';
import { RecoveryForm } from './components/form/form-recovery';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<FormPage />}>
            <Route path='/auth' element={<AuthForm />} />
            <Route path='/registration' element={<RegistrationForm />} />
            <Route path='/forgot-pass' element={<RecoveryForm />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path='/' element={<Layout />}>
              <Route element={<LayoutMainPage />}>
                <Route path='/' element={<Navigate to='/books/all' />} />
                <Route path='/books/all' element={<MainPage />} />
                <Route path='/books/:category' element={<MainPage />} />
                <Route path='/terms' element={<Terms contentView='terms' />} />
                <Route path='/contract' element={<Terms contentView='contract' />} />
                <Route path='/profile' element={<Loader />} />
              </Route>
              <Route path='/books/:category/:bookId' element={<BookPage />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
