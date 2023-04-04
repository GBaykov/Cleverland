import { createSlice } from '@reduxjs/toolkit';
import { AppToast } from '../../components/toast/toast.enum';
import { ChosenBookSuccess, BookAmongAllBooks } from '../../types/books';

export enum ModalType {
  rating = 'rating',
  booking = 'booking',
}
export type AppModal = {
  modalType: ModalType;
  isShow?: boolean;
  data: BookAmongAllBooks | ChosenBookSuccess | null;
  // data: MainBookDTO | ChosenBookSuccess | CommentDTO | null;
};

export enum UserFormType {
  register = 'register',
  edit = 'edit',
}

export type UserForm = {
  type: UserFormType;
  isDisabled: boolean;
};

export type UtilsState = {
  toast: AppToast | null;
  isDescendingSort: boolean;
  searchString: string;
  modal: AppModal | null;
  userForm: UserForm | null;
};

const initialState: UtilsState = {
  toast: null,
  isDescendingSort: true,
  searchString: '',
  modal: null,
  userForm: null,
};

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    // setToast: (state, action) => {
    //   state.toast = action.payload;
    // },
    hideToast: (state) => {
      state.toast = null;
    },
    // setSortType: (state) => {
    //   state.isDescendingSort = !state.isDescendingSort;
    // },
    // setSearchString: (state, action) => {
    //   state.searchString = action.payload;
    // },
    // setModal: (state, action) => {
    //   state.modal = action.payload;
    // },
    // hideModal: (state) => {
    //   state.modal = null;
    // },
    // setUserForm: (state, action) => {
    //   state.userForm = action.payload;
    // },
  },
});
// export const { setToast, hideToast, setSortType, setSearchString, setModal, hideModal, setUserForm } =
//   utilsSlice.actions;
export const UtilsReducer = utilsSlice.reducer;
