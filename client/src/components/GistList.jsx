import React, { useState } from 'react';
import axios from 'axios';

const GistList = ({ gists }) => {
  const [gistDetail, setDetail] = useState();

  const clickGist = () => {
    axios.get(`/gist/${}`)
      .then(res => )
  };

  return (
    <div>
      {gists.length ?
          gists.map(el => (
            <ul key={el.id}>
            <li>Date: {el.created_at}</li>
            <li>Description: {el.description}</li>
            </ul>
          ))
      : null}
    </div>
  )
};

export default GistList;