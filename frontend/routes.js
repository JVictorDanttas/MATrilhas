import HomeController from './controllers/HomeController.js';
import DestinoController from './controllers/DestinoController.js';

const routes = (app) => {
  app.get('/', HomeController.index);
  app.get('/destinos/:id/atracoes', DestinoController.index);
};

export default routes;
