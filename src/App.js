import './App.css';
import './index.css';
import { MoviesList } from "./Movies/moviesList.js"
import { MovieDetail } from "./Movies/movieDetail.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import { PageManager } from './pageManager';
// import { PageManager } from './pageManager';


function App() {
  // const [issudoToggled, setsudoToggled] = useState(4)
  return (
    <Router>
      <div className='render'>
        <Routes>
          <Route exact path="/" element={<MoviesList />}>
            {/* <PageManager issudoToggled={issudoToggled} setsudoToggled={setsudoToggled} /> */}
          </Route>
          <Route path="/movie/:id" element={<MovieDetail/>}>
          </Route>
          <Route path="/pages" element={<PageManager/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;