import React, { useState } from 'react';
import Search from './Search';
import GistList from './GistList';

const App = () => {
  const [gists, setGists] = useState([]);

  return (
    <div>
      <Search setGists={setGists} />
      <GistList gists={gists} />
    </div>
  )
};

export default App;