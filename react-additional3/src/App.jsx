import React, { useState } from "react";

import Episodes from "./components/Episodes/Episodes";
import Layout from "./components/Layout/Layout";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";

import {  Routes, Route, BrowserRouter } from "react-router-dom";


import "./App.css";

const App = () => {
  
  const [pages, setPage] = useState([]);

  return (
    <div className="container">
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
