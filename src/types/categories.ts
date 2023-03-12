export type Category = {
  name: string;
  path: string;
  id: number;
};
export type ICategories = {
  categories: Category[];
};
export type CategoryError = {
  error: {
    data: null;
    error: {
      status: number;
      name: string;
      message: string;
      details: {};
    };
  };
};
