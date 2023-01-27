import favs from './api/favs/index.js';
import users from './api/users/index.js';

function routes (app) {
  app.use('/api/favs', favs);
  app.use('/api/users', users);
}

export default routes;