import list from './api/list/index.js';
import user from './api/user/index.js';

function routes (app) {
  app.use('/api/favs', list);
  app.use('/api/users', user);
}

export default routes;