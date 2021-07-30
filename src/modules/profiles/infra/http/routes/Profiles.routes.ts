import { Router } from 'express';
import CreateProfileController from '../controllers/CreateProfileController';
import DeleteProfileController from '../controllers/DeleteProfileController';
import FindOneProfileByIdController from '../controllers/FindOneProfileByIdController';

const profilesRoute = Router();
const createProfile = new CreateProfileController();
const deleteProfile = new DeleteProfileController();
const findOneProfile = new FindOneProfileByIdController();

profilesRoute.post('/', createProfile.handle); // coloca , e chama o controller
profilesRoute.delete('/', deleteProfile.handle);
profilesRoute.get('/:id', findOneProfile.handle);

export default profilesRoute;
