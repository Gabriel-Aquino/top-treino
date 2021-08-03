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
const findOneProfile = new FindOneProfileByIdController();
const findProfileByName = new FindOneProfileByNameController();
const returnAllProfilesController = new ReturnAllProfilesController();
const updateProfiles = new UpdateProfilesController();

profilesRoute.post('/create_profile', createProfile.handle); // coloca , e chama o controller
profilesRoute.post('/find_profile', findProfileByName.handle);
profilesRoute.post('/update_profile', updateProfiles.handle);
profilesRoute.get('/all_profiles', returnAllProfilesController.handle);
profilesRoute.get('/find_profile/:id', findOneProfile.handle);
profilesRoute.delete('/delete_profile', deleteProfile.handle);

export default profilesRoute;
