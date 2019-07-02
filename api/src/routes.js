import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res, next) => {
  const user = await User.create({
    name: 'Daniel Lucas',
    email: 'dlsbdaniel@gmail.com',
    password_hash: '1231313131323',
  }).catch(error => console.log(error));
  return res.json(user);
});

export default routes;
