
import './App.css';
import { Movies } from './Pages/Movies/Movies';
import {Routes,Route} from "react-router-dom"
import { Series } from './Pages/Series/Series';
import { Funspace } from './Components/Funspace';
function App() {
  return (
    <div className="App">
      <Funspace/>
     <Routes>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/series" element={<Series/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
