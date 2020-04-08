import { Router } from 'express';

const routes = Router();

// declaro minhas rotas
routes.get('/', (req, res) => {

  res.json({
    message: 'ok'
  });

})

export default routes;