import React, { useState } from "react";

import "./App.css";
import Episodes from "./components/Episodes/Episodes";
import {  Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import {BrowserRouter} from 'react-router-dom';
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";


const App = () => {
  
  const [pages, setPage] = useState([]);

  return (
    <div>
        <BrowserRouter>
      
        <Routes>
          <Route path={"/episodes"} element={<Layout pages={pages} />}>
              <Route exact index  element={<Episodes setPage={setPage}/>} />
              <Route path={":pageEpisodes"}  element={<Episodes setPage={setPage}  />} />
              <Route exact path={"/episodes/:episodeNumber/details/:id"}  element={<EpisodeDetails  />} />
              <Route exact path={"/episodes/details/:id"}  element={<EpisodeDetails  />} />

          </Route>
              

        </Routes>

        </BrowserRouter>
   
    </div>
  );
};

export default App;
