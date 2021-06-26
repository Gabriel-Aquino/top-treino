import { Router } from 'express';
import usersRoute from 'modules/users/infra/http/routes/Users.routes';

const mainRoute = Router();

mainRoute.use('/users', usersRoute);

export default mainRoute;
