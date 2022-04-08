// Action Creators
export const addBook = (book) => {
  return {
    type: "books/add",
    payload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: "books/remove",
    payload: id,
  };
};

// Reducers
const initialState = [] // array of books

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "books/add":
      return [...state, action.payload];
    
    
      // return {
      //   ...state,
      //   books: [...state.books, action.payload],
      // };

    case "books/remove":
      return state.filter((book)=> book.id !==action.payload)

      // const newBooks = state.books.filter((book) => book.id !== action.payload);
      // return {
      //   ...state,
      //   books: newBooks,
      // };
    default:
      return state;
  }
}
