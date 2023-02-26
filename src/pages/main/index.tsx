import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/button';
import { CardsField } from '../../components/cards-field';
// import search from '../../assets/icons/search.svg';
import sort from '../../assets/icons/sort.svg';
// import cross from '../../assets/icons/cross.svg';
import { tableIconSvg, listIconSvg, cross, search } from '../../constants/svg';

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
  CrossWrapper,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menu-reducer';
import { fetchCategories } from '../../store/reducers/categories-reducer';
import { allBooksSlice, fetchAllBooks } from '../../store/reducers/books-reducer';
import { Loader } from '../../components/loader';
import { NotificationError } from '../../components/utils/notification-error';

export const MainPage = () => {
  const [isList, setuseList] = useState(false);
  const [isInputOpened, setInputOpened] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const dispatch = useAppDispatch();
  const { booksStatus, isDESC, inputValue } = useAppSelector((store) => store.AllBooksReducer);
  const { categoryStatus } = useAppSelector((store) => store.CategoriesReducer);
  const { setIsDESC, setInputValue } = allBooksSlice.actions;

  const [size, setSize] = useState([window.innerWidth]);
  const useWindowSize = () => size;
  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 600) {
      setInputOpened(false);
    }
  }, [width]);

  const onInputOpened = () => {
    const input = document.getElementById('input-search');
    if (input) {
      setInputOpened(true);
      console.log(input);
      input.focus();
    }
  };
  const onCrossClick = () => {
    setInputOpened(false);
    console.log('cross click');
  };
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const BookSortClick = () => {
    dispatch(setIsDESC(!isDESC));
  };

  const onInputFocus = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.stopPropagation();
    setInputFocused(true);
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
        <MainPageContainer onClick={() => setInputFocused(false)}>
          <MainPageHeader>
            <SeacrSortContainer>
              <SearchBar isInputOpened={isInputOpened}>
                <SvgWrapper
                  data-test-id='button-search-open'
                  onClick={() => {
                    onInputOpened();
                  }}
                  isInputOpened={!isInputOpened}
                  isInputFocused={isInputFocused}
                >
                  {/* <img src={search} alt='search' /> */}
                  {search}
                </SvgWrapper>
                <StyledInput
                  className=''
                  isInputOpened={isInputOpened}
                  id='input-search'
                  data-test-id='input-search'
                  value={inputValue}
                  onChange={(e) => onInputChange(e)}
                  onClick={(e) => onInputFocus(e)}
                  type='search'
                  placeholder='Поиск книги или автора…'
                  autoFocus={true}
                />
                <CrossWrapper
                  data-test-id='button-search-close'
                  isInputOpened={isInputOpened}
                  onClick={() => onCrossClick()}
                >
                  {cross}
                  {/* <img data-test-id='button-search-close' src={cross} alt='cross' /> */}
                </CrossWrapper>
              </SearchBar>
              <BookSort
                data-test-id='sort-rating-button'
                isDESC={isDESC}
                onClick={BookSortClick}
                isInputOpened={isInputOpened}
              >
                <img src={sort} alt='sort' />
                <span>По рейтингу</span>
              </BookSort>
            </SeacrSortContainer>
            <ViewButtonsContainer isInputOpened={isInputOpened}>
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
