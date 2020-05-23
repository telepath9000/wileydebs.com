import React, { useState } from 'react';
import { router } from './router';
import NavBar from './NavBar';
import './css/App.scss';

const App = () => {
  const [page, setPage] = useState("Home");
  const handleIndexClick = event => setPage(event.target.innerText);
  const Page = router(page);

  return (
    <div className="container">
      <NavBar handleClick={handleIndexClick}/>
      <Page />
    </div>
  );
};

export default App;
