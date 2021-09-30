const router = require('express').Router();
const controller = require('./controllers');

router
  .route('/gists')
  .get(controller.getGists);

router
  .route('/gist/:id')
  .get(controller.gist);

module.exports = router;
