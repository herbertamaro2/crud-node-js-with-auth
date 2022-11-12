import { Request, response, Response } from "express";
import { UserService } from '../../services/user/UserService'

class UserController{
   async show(req: Request, res: Response){
    const tip = req.user_id;
    const user_id:string = String(tip);

    const userService = new UserService;
    const user = await userService.show(user_id)
    return res.json(user)
   }

   async edit(req: Request, res: Response){
    const tip = req.user_id;
    const user_id:string = String(tip);
    const userService = new UserService;
    const user = await userService.show(user_id)
    return res.json(user)
   }

   async show_user(req: Request, res: Response){
    const name = req.params.name;
    const userService = new UserService;
    const user = await userService.show_user(name)
    return res.json(user)
   }
   
}

export {UserController}