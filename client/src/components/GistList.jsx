import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GistList = ({ gists }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => console.log(details), [details])

  useEffect(() => {
    let promises = [];
    if (gists.length) {
      gists.map(el => (
        promises.push(axios.get(`/gist/${el.id}`))
      ))

      axios.all(promises)
        .then((...res) => (
        ));
    }
  }, [gists])

  // const clickGist = () => {
  //   axios.get(`/gist/${}`)
  //     .then(res => )
  // };

  return (
    <div>
      {gists.length ?
          gists.map(el => (
            <ul key={el.id}>
            <li>Date: {el.created_at}</li>
            <li>Description: {el.description}</li>
            {details.length ? details.map(el => (
              <ul key={el.id}>
                <li>hi</li>
              </ul>
            )) : null}
            </ul>
          ))
      : null}
    </div>
  )
};

export default GistList;