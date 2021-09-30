import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');

  const search = () => {
    console.log('hi');
  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type here..." name="username" />
      <button onClick={search}>Search</button>
    </div>
  )
}

export default App;