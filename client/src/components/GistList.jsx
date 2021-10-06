import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GistList = ({ gists }) => {
  const [details, setDetails] = useState([]);

  const clickGist = (id) => {
    let updated = details;
    let index = details.findIndex(el => el.id === id);
    details[index]['clicked'] = !details[index]['clicked'];
    setDetails(updated);
  };

  useEffect(() => {
    let promises = [];
    if (gists.length) {
      gists.map(el => (
        promises.push(axios.get(`/gist/${el.id}`))
      ))

      axios.all(promises)
        .then(axios.spread((...res) => {
          let result = [];
          res.map(el => result.push(el.data));
          result.forEach(el => el["clicked"] = false);
          setDetails(result);
        }));
    }
  }, [gists])

  useEffect(() => {}, [details])

  return (
    <div>
      {gists.length ?
          gists.map(el => (
            <ul key={el.id} onClick={() => clickGist(el.id)}>
            <li>Date: {el.created_at}</li>
            <li>Description: {el.description}</li>
            {details.length ? details.filter(element => element.id === el.id).map(el => (
              <ul key={el.id} style={{ display : (!el.clicked ? 'none': 'block') }}>
                <li>{el.url}</li>
              </ul>
            )) : null}
            </ul>
          ))
      : null}
    </div>
  )
};

export default GistList;