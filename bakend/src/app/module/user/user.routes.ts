import express from 'express';
import { UserController } from './user.controller';
import { jwtCheck, jwtParse } from '../../middleware/auth';

const router = express.Router();

//api/v1/user
router.post('/', jwtCheck, UserController.createCurrentUser);
router.put('/', jwtCheck, jwtParse, UserController.updateCurrentUser);

export const UserRoutes = router;
