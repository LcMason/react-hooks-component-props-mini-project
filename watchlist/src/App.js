import logo from './logo.svg';
import './App.css';
import MoviesContainer from './MoviesContainer';

function App() {
  const movies =[{title:"Lovehard", year: 2021},
  {title:"Spiderman", year: 2022},
   {title:"Superbad", year: 2007}]
  return (
    <div className="App">
      < MoviesContainer movies={movies} />
      
    </div>
  );
}

export default App;
