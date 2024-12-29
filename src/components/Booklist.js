import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, setSortCriteria } from '../redux/actions'
const BooksList = () => {
    const dispatch = useDispatch();
    const { books, loading, error, sortCriteria } = useSelector((state) => state);
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, [dispatch]);
  
    const handleSortChange = (e) => {
      const [criteria, order] = e.target.value.split("-");
      dispatch(setSortCriteria(criteria, order));
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h1>Books List</h1>
        <select onChange={handleSortChange} value={`${sortCriteria.criteria}-${sortCriteria.order}`}>
          <option value="title-asc">Title (Ascending)</option>
          <option value="title-desc">Title (Descending)</option>
          <option value="author-asc">Author (Ascending)</option>
          <option value="author-desc">Author (Descending)</option>
          <option value="publisher-asc">Publisher (Ascending)</option>
          <option value="publisher-desc">Publisher (Descending)</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default BooksList;