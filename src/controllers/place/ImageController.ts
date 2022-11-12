import { Request, Response } from "express";
import { ImageService } from '../../services/place/ImageService'

export class ImageController {

    async images(req: Request, res: Response){
        const pid = req.user_id;
        const user_id:string = String(pid);
        const place_id = req.params.id;

        const {
           name,
           description,
           file,
           active
        } = req.body;
    
        const imageService = new ImageService();
        const placeImages = await imageService.images({
            user_id,
            place_id,
            name,
            description,
            file,
            active
        })
    
        return res.json(placeImages)
       }
}