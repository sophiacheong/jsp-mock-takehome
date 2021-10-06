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
        .then(axios.spread((...res) => {
          let result = [];
          res.map(el => result.push(el.data));
          setDetails(result);
        }));
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
            {details.length ? details.filter(element => element.id === el.id).map(el => (
              <ul key={el.id}>
                <li>{el.url}</li>
              </ul>
            )) : null}
            {/* {details.length ? details.map(element => {
              if (element.url === el.id) {
                return <ul key={element.id}>
                  <li>idk</li>
                </ul>
              }
            }) : null} */}
            </ul>
          ))
      : null}
    </div>
  )
};

export default GistList;