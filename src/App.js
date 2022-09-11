
import './App.css';
import { Movies } from './Pages/Movies/Movies';
import {Routes,Route} from "react-router-dom"
import { Series } from './Pages/Series/Series';
import { Funspace } from './Components/Funspace';
import { Trending } from './Pages/Trending/Trending';
import { Search } from './Pages/Search/Search';
function App() {
  return (
    <div className="App">
      <Funspace/>
     <Routes>
      <Route path="/" element={<Trending/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/series" element={<Series/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
