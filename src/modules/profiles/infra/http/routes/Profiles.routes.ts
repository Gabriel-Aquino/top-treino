import { Router } from 'express';
import CreateProfileController from '../controllers/CreateProfileController';

const profilesRoute = Router();
const createProfile = new CreateProfileController();

profilesRoute.post('/', createProfile.handle); // coloca , e chama o controller

export default profilesRoute;
