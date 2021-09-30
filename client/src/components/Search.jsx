import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setGists }) => {
  const [username, setUsername] = useState('');

  const search = () => {
    axios.get('/gists', { headers: { username } })
      .then(res => setGists(res.data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type here..." name="username" />
      <button onClick={search}>Search</button>
    </div>
  )
};

export default Search;