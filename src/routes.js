import { Router } from 'express';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
   return res.json({ ok: true });
});

export default routes;