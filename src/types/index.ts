export interface BookReviews {
  username: string;
  date: string;
  comment?: string;
  rating: number;
}

export interface BookDetails {
  publishing: string;
  binding: string;
  format: string;
  genre: string;
  ISBN: string;
  manufacturer: string;
  pages: number;
  year: number;
  weight: number;
}

export interface IBook {
  id: number;
  name: string;
  author: string;
  rating?: number;
  reviews?: BookReviews[];
  details: BookDetails;
  photo?: string[];
  description: string;
}

export interface CardProps {
  book: IBook;
  isList: boolean;
}
