export interface BookAmongAllBooks {
  book: {
    issueYear: string;
    rating: number;
    title: string;
    authors: string[];
    image: {
      url: string;
    };
    categories: string[];
    id: number;
    booking: {
      id: number;
      order: boolean;
      dateOrder: string;
      customerId: number;
      customerFirstName: string;
      customerLastName: string;
    };
    delivery: {
      id: 7;
      handed: true;
      dateHandedFrom: string;
      dateHandedTo: string;
      recipientId: number;
      recipientFirstName: string;
      recipientLastName: string;
    };
    histories: [
      {
        id: number;
        userId: number;
      }
    ];
  };
}

export interface AllBooksSuccess {
  books: BookAmongAllBooks[];
}

export interface ChosenBookSuccess {
  book: {
    id: number;
    title: string;
    rating: number;
    issueYear: string;
    description: string;
    publish: string;
    pages: string;
    cover: string;
    weight: string;
    format: string;
    ISBN: string;
    producer: string;
    authors: string[];
    images: [
      {
        url: string;
      }
    ];
    categories: string[];
    comments: [
      {
        id: number;
        rating: number;
        text: string;
        createdAt: string;
        user: {
          commentUserId: number;
          firstName: string;
          lastName: string;
          avatarUrl: string;
        };
      }
    ];
    booking: {
      id: number;
      order: true;
      dateOrder: string;
      customerId: number;
      customerFirstName: string;
      customerLastName: string;
    };
    delivery: {
      id: number;
      handed: boolean;
      dateHandedFrom: string;
      dateHandedTo: string;
      recipientId: number;
      recipientFirstName: string;
      recipientLastName: string;
    };
    histories: [
      {
        id: number;
        userId: number;
      }
    ];
  };
}
export interface BookError {
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
