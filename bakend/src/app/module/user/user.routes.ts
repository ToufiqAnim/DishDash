import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

//api/v1/user
router.post('/', UserController.createCurrentUser);

export const UserRoutes = router;
