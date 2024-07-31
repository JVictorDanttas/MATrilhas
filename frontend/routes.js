import HomeController from './controllers/HomeController.js';
import DestinoController from './controllers/DestinoController.js';

const routes = (app) => {
  app.get('/', HomeController.index);
};

export default routes;
