import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res, next) => res.json({ message: 'Hello World' }));

export default routes;
