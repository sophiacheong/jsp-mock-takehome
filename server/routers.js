const router = require('express').Router();
const controller = require('./controllers');

router
  .route('/searchRepo')
  .get(controller.getRepos);

module.exports = router;
