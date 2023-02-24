import { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { CardsField } from '../../components/cards-field';
import search from '../../assets/icons/search.svg';
import sort from '../../assets/icons/sort.svg';
import cross from '../../assets/icons/cross.svg';
import { tableIconSvg, listIconSvg } from '../../constants/svg';

import {
  BookSort,
  SvgWrapper,
  MainPageContainer,
  MainPageHeader,
  SeacrSortContainer,
  SearchBar,
  ViewButton,
  ViewButtonsContainer,
  StyledInput,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { allBooksSlice, fetchAllBooks } from '../../store/reducers/books-reducer';
import { Loader } from '../../components/loader';
import { NotificationError } from '../../components/utils/notification-error';

export const MainPage = () => {
  const [isList, setuseList] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const { booksStatus, isDESC } = useAppSelector((store) => store.AllBooksReducer);
  const { categoryStatus } = useAppSelector((store) => store.CategoriesReducer);
  const { setIsDESC } = allBooksSlice.actions;

  const onInputFocus = () => {
    setInputFocused(true);
    const input = document.getElementById('input-search');
    if (input) {
      input.focus();
    }
  };
  const onCrossClick = () => {
    setInputFocused(false);
    setInputValue('');
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const BookSortClick = () => {
    dispatch(setIsDESC(!isDESC));
  };

  return (
    <>
      {' '}
      {(categoryStatus === 'loading' || booksStatus === 'loading') &&
        booksStatus !== 'faild' &&
        categoryStatus !== 'faild' && <Loader />}
      {(categoryStatus === 'faild' || booksStatus === 'faild') &&
      (categoryStatus !== 'loading' || booksStatus !== 'loading') ? (
        <NotificationError text='Что-то пошло не так. Обновите страницу через некоторое время.' />
      ) : (
        <MainPageContainer>
          <MainPageHeader>
            <SeacrSortContainer>
              <SearchBar isInputFocused={isInputFocused}>
                <SvgWrapper
                  data-test-id='button-search-open'
                  onClick={() => {
                    onInputFocus();
                  }}
                  isInputFocused={!isInputFocused}
                >
                  <img src={search} alt='search' />
                </SvgWrapper>
                <StyledInput
                  isInputFocused={isInputFocused}
                  id='input-search'
                  data-test-id='input-search'
                  value={inputValue}
                  onChange={(e) => onInputChange(e)}
                  type='search'
                  placeholder='Поиск книги или автора…'
                />
                <SvgWrapper isInputFocused={isInputFocused} onClick={() => onCrossClick()}>
                  <img data-test-id='button-search-close' src={cross} alt='cross' />
                </SvgWrapper>
              </SearchBar>
              <BookSort isDESC={isDESC} onClick={BookSortClick} isInputFocused={isInputFocused}>
                <img src={sort} alt='sort' />
                <span>По рейтингу</span>
              </BookSort>
            </SeacrSortContainer>
            <ViewButtonsContainer isInputFocused={isInputFocused}>
              <ViewButton
                data-test-id='button-menu-view-window'
                onClick={() => setuseList(false)}
                className={isList ? '' : 'current-view'}
              >
                {tableIconSvg}
              </ViewButton>
              <ViewButton
                data-test-id='button-menu-view-list'
                onClick={() => setuseList(true)}
                className={isList ? 'current-view' : ''}
              >
                {listIconSvg}
              </ViewButton>
            </ViewButtonsContainer>
          </MainPageHeader>

          <CardsField isList={isList} />
        </MainPageContainer>
      )}
    </>
  );
};
