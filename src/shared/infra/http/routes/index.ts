import { Router } from 'express';
import profilesRoute from '@modules/profiles/infra/http/routes/Profiles.routes';
import usersRoute from '@modules/users/infra/http/routes/Users.routes';

const mainRoute = Router();

mainRoute.use('/users', usersRoute);
mainRoute.use('/profiles', profilesRoute);

export default mainRoute;
