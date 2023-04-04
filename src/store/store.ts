import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { MenuReducer } from './reducers/menu-reducer';
import { BookReducer } from './reducers/book-reducer';
import { AllBooksReducer } from './reducers/books-reducer';
import { CategoriesReducer } from './reducers/categories-reducer';
import { AuthReducer } from './reducers/auth-reducer';
import { RecoveryReducer } from './reducers/recovery-reducer';
import { RegisterReducer } from './reducers/registration-reducer';
import { UtilsReducer } from './reducers/utils-reducer';

export const rootReducer = combineReducers({
  MenuReducer,
  BookReducer,
  AllBooksReducer,
  CategoriesReducer,
  AuthReducer,
  RecoveryReducer,
  RegisterReducer,
  UtilsReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
