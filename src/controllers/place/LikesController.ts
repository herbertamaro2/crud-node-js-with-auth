import { Request, Response } from "express";
import { LikeService } from '../../services/place/LikeService'

export class LikesController{

   //Fetch Like  
   async fetchLike(req: Request, res: Response){
        const pid = req.params.id;
        const likeService = new LikeService;
        const like = await likeService.fetch(pid)
        return res.json(like)
   }

    //Like/Deslike
    async handleLike(req: Request, res: Response){
        const tip = req.user_id;
        const user_id:string = String(tip);
        const pid = req.params.id;
        const likeService = new LikeService;
        const like = await likeService.handle({
            user_id,
            pid,
        })
        return res.json(like)
    }


   
}