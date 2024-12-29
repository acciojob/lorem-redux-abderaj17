export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";;
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const SET_SORT_CRITERIA = "SET_SORT_CRITERIA";
 

export const fetchBooksRequest = () => ({type: FETCH_BOOKS_REQUEST});
export const fetchBooksSuccess = (books) => ({type: FETCH_BOOKS_SUCCESS, payload: books});
export const fetchBooksFailure = (error) => ({type: FETCH_BOOKS_FAILURE, payload: error});
export const setSortCriteria = (criteria, order)=>({
    type: SET_SORT_CRITERIA,
    payload: {criteria, order}
});

export const fetchBooks = () => async (dispatch) =>{
    dispatch(fetchBooksRequest());
    try{
        const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YOUR_API_KEY");
        const data = await response.json();
        const books  = data.results.books.map((book)=>({
            title: book.title,
            author: book.author,
            publisher: book.publisher,
        }));
        dispatch(fetchBooksSuccess(books));
    }catch (error) {
        if (error.message.includes("401")) {
          console.error("Authentication error: Check your API key.");
        }
        dispatch(fetchBooksFailure(error.message));
      }
      
};
