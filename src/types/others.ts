export type ResponseError = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: {};
  };
};
