export enum ToastMessages {
  mainError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
  mainSuccess = 'успешно',
  addRatingSuccess = 'Спасибо, что нашли время оценить книгу!',
  addRatingError = 'Оценка не была отправлена. Попробуйте позже!',
  bookingSuccess = 'Книга забронирована. Подробности можно посмотреть на странице Профиль',
  bookingError = 'Что-то пошло не так, книга не забронирована. Попробуйте позже!',
  editSuccess = 'Изменения успешно сохранены!',
  editError = 'Изменения не были сохранены. Попробуйте позже!',
  editRatingSuccess = 'Спасибо, что нашли время изменить оценку!',
  editRatingError = 'Изменения не были сохранены. Попробуйте позже!',
  deleteBookingError = 'Не удалось снять бронирование книги. Попробуйте позже!',
  deleteBookingSuccess = 'Бронирование книги успешно отменено!',
  uploadPhotoSuccess = 'Фото успешно сохранено!',
  uploadPhotoError = 'Что-то пошло не так, фото не сохранилось. Попробуйте позже!',
}
export enum ToastVariant {
  positive = 'positive',
  negative = 'negative',
}

export enum ToastType {
  edit = 'edit',
  add = 'add',
  delete = 'delete',
  rate = 'rate',
  editRate = 'editRate',
  main = 'main',
  photo = 'photo',
  user = 'user',
}
export type AppToast = {
  toastVariant: ToastVariant;
  toastMessage: ToastMessages;
  toastType?: ToastType;
};
