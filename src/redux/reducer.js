import { act } from "react";
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, SET_SORT_CRITERIA } from "./actions";

const initialState ={
    books: [],
    loading: false,
    error: null,
    sortCriteria: {criteria: 'title', order: "asc"},
};

export const booksReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_BOOKS_SUCCESS:
            return {...state, loading: false, books: action.payload};
        case FETCH_BOOKS_FAILURE:
            return {...state, loading: false, error:action.payload};
        case SET_SORT_CRITERIA:
            const {criteria, order} = action.payload;
            const sortedBooks = [...state.books].sort((a,b)=>{
                if(a[criteria] < b[criteria]) return order === "asc" ? -1 : 1;
                if(a[criteria] > b[criteria]) return order === "asc" ? 1 : -1;
                return 0;
            });
            return {...state, books: sortedBooks, sortCriteria: {criteria, order}};
            default:
                return state;
    }
};
