export type Category = {
  name: string;
  path: string;
  id: number;
};
export interface ICategories {
  categories: Category[];
}
export interface CategoryError {
  error: {
    data: null;
    error: {
      status: number;
      name: string;
      message: string;
      details: {};
    };
  };
}
