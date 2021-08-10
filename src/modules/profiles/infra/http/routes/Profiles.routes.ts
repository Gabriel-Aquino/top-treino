import { Router } from 'express';
import CreateProfileController from '../controllers/CreateProfileController';
import DeleteProfileController from '../controllers/DeleteProfileController';
import FindOneProfileByIdController from '../controllers/FindOneProfileByIdController';
import FindOneProfileByNameController from '../controllers/FindProfileByNameController';
import ReturnAllProfilesController from '../controllers/ReturnAllProfilesController';
import UpdateProfilesController from '../controllers/UpdateProfilesController';

const profilesRoute = Router();
const createProfile = new CreateProfileController();
const deleteProfile = new DeleteProfileController();
const findOneProfileById = new FindOneProfileByIdController();
const findProfileByName = new FindOneProfileByNameController();
const returnAllProfilesController = new ReturnAllProfilesController();
const updateProfiles = new UpdateProfilesController();

profilesRoute.get('/', returnAllProfilesController.handle);
profilesRoute.get('/findById/:id', findOneProfileById.handle);
profilesRoute.get('/findByName/:name', findProfileByName.handle);
profilesRoute.put('/', updateProfiles.handle);
profilesRoute.post('/', createProfile.handle); // coloca , e chama o controller
profilesRoute.delete('/:id', deleteProfile.handle);

export default profilesRoute;
