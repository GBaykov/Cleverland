import { BookAmongAllBooks } from './books';

export type BookReviews = {
  username: string;
  date: string;
  comment?: string;
  rating: number;
};

export type BookDetails = {
  publishing: string;
  binding: string;
  format: string;
  genre: string;
  ISBN: string;
  manufacturer: string;
  pages: number;
  year: number;
  weight: number;
};

export type IBook = {
  id: number;
  name: string;
  author: string;
  rating?: number;
  reviews?: BookReviews[];
  details: BookDetails;
  photo?: string[];
  description: string;
};

export type CardProps = {
  book: BookAmongAllBooks;
  isList: boolean;
};
