import { Router, Request, Response } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { PlaceController } from "./controllers/place/PlaceController";
import { ImageController } from "./controllers/place/ImageController";
import { UserController } from "./controllers/user/UserController";
import { LikesController } from "./controllers/place/LikesController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
const router = Router();


router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/user', isAuthenticated, new UserController().show)
router.get('/search_user/:name', isAuthenticated ,  new UserController().show_user)
router.put('/user/edit', isAuthenticated, new UserController().edit)
router.get('/user', isAuthenticated, new UserController().show)

router.post('/place/add', isAuthenticated, new PlaceController().add)
router.post('/place/add/images', isAuthenticated, new ImageController().images)
router.get('/places/:id',  new PlaceController().info_places)
router.get('/place/:id',  new PlaceController().show)
router.delete('/place/delete/:id', isAuthenticated, new PlaceController().delete)
router.get('/:user_id/places',  new PlaceController().info_places)
router.put('/place/edit/:id', isAuthenticated, new PlaceController().edit)
router.get('/search_places/:name', isAuthenticated ,  new PlaceController().search_places)


router.get('/like/:id', isAuthenticated, new LikesController().fetchLike)
router.put('/like/:id', isAuthenticated, new LikesController().handleLike)


export { router};