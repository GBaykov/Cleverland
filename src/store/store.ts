import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { MenuReducer } from './reducers/menu-reducer';
import { BookReducer } from './reducers/book-reducer';
import { AllBooksReducer } from './reducers/books-reducer';
import { CategoriesReducer } from './reducers/categories-reducer';

export const rootReducer = combineReducers({
  MenuReducer,
  BookReducer,
  AllBooksReducer,
  CategoriesReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
