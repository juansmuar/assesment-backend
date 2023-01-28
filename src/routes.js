import list from './api/list/index.js';
import user from './api/user/index.js';
import authLocal from './auth/local/index.js';

function routes (app) {
  app.use('/api/favs', list);
  app.use('/api/users', user);

  // auth routes
  app.use('/auth/local', authLocal);
}

export default routes;