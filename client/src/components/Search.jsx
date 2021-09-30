import React, { useState } from 'react';
import axios from 'axios';

export default Search = () => {
  const [username, setUsername] = useState('');

  const search = () => {

  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type here..." name="username" />
      <button onClick={search}>Search</button>
    </div>
  )
};