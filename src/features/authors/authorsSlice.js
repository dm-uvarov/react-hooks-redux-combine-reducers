// redux events for authors
// action creators 
import {v4 as uuid} from "uuid";

export const addAuthor = (author) => {
    return {
      type: "authors/add",
      payload: author,
    };
  };
  
export const removeAuthor = (id) => {
    return {
      type: "authors/remove",
      payload: id,
    };
  };


  // executive entity ---> reducers
const initialState = []; //array of author


export default function authorsReducer(state = initialState, action) {
    switch (action.type) {

      case "authors/add":
        return [...state, action.payload];
           // {...state,
          // authors: [...state.authors, action.payload]};
        
      // if authors removed should be books from this author be removed too?
      case "authors/remove":
        return state.filter((author)=> author.id !==action.payload);

      case "books/add":
        const existingAuthor = state.find(
          (author)=> author.authorName === action.payload.authorName
        );
        if (existingAuthor) {
          return state;
        } else{
          return[
            ...state,
            {authorName: action.payload.authorName, id: uuid()}
          ];
        }
      

        // const newAuthors = state.authors.filter(
        //   (author) => author.id !== action.payload
        // );
        // return {
        //   ...state,
        //   authors: newAuthors,
        // };
      default:
        return state;
    }
}