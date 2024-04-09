import express from 'express';
import { UserController } from './user.controller';
import { jwtCheck } from '../../middleware/auth';

const router = express.Router();

//api/v1/user
router.post('/', jwtCheck, UserController.createCurrentUser);

export const UserRoutes = router;
