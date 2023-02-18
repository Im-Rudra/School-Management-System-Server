const { Router } = require('express');
const rootRouter = Router();

rootRouter.get('/', (req, res) => {
  res.send('Router is working properly');
});

module.exports = rootRouter;
