import React, { useState } from 'react';
import { router } from './router';
import './App.scss';

const App = () => {
  const [page, setPage] = useState("Home");
  const handleIndexClick = event => setPage(event.target.innerText);
  const Page = router(page);

  return (
    <div className="container">
      <Page handleClick={handleIndexClick} />
    </div>
  );
};

export default App;
