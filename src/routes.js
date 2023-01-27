import favs from './api/favs/index.js';

function routes (app) {
  app.use('/api/favs', favs);
}

export default routes;