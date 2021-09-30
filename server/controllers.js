const axios = require('axios');

const controller = {
  getGists: (req, res) => {
    let {username} = req.headers;

    axios.get(`https://api.github.com/users/${username}/gists`)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(404).send(err));
  },
  gist: (req, res) => {
    let { id } = req.params;

    axios.get(`https://api.github.com/gists/${id}`)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = controller;