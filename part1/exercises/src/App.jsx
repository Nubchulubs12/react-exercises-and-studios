import './App.css';
import BookList from './components/BookList.jsx';
import ChoresList from './components/ChoresList.jsx';
import MovieList from './components/MovieList.jsx';
import HobbyLinks  from './components/HobbyLinks.jsx';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
      <HobbyLinks />
    </div>
  );
}

export default App;
