import './App.css';
import 'material-icons/iconfont/material-icons.css';
import BookList from './components/bookList';
import SearchBox from './components/searchBox';
import { useSelector } from 'react-redux';
import Loading from "./asset/loading.svg";

function App() {
  const books = useSelector(state => state.searchReducer)
  return (
    <div className='container'>
      <SearchBox/>
      {books.current_books.length > 1 && !books.loading ? <BookList/> : books.loading ? <img className="svg-loading" src={Loading} alt={"loading"} /> : null}
    </div>
  );
}

export default App;



