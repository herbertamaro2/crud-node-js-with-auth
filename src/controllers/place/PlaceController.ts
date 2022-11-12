import { Request, Response } from "express";
import { PlaceService } from '../../services/place/PlaceService'

class PlaceController{

    //Adicionar um Roteiro
   async add(req: Request, res: Response){
    const tip = req.user_id;
    const user_id:string = String(tip);
   
    const images = JSON.stringify(req.body.images);
    const trip_route = JSON.stringify(req.body.trip_route);
    const accommodations = JSON.stringify(req.body.accommodations);
    const restaurants = JSON.stringify(req.body.restaurants);
    const attractions = JSON.stringify(req.body.attractions);
  
    const {
        trip_title,
        trip_date_start,
        trip_date_end,
        description,
        country_id        
    } = req.body;

    const placeService = new PlaceService();
    const placeAdd = await placeService.add({
        user_id,
        trip_title,
        trip_date_start,
        trip_date_end,
        description,
        country_id,
        images,
        trip_route,
        accommodations,
        restaurants,
        attractions
    })

    return res.json(placeAdd)
   }





   //Ver o Roteiro
   async show(req: Request, res: Response){
    const id = req.params.id;
    const placeService = new PlaceService();
    const placeShow = await placeService.show(id)
    return res.json(placeShow)
   }






   //Procurar Roteiros
   async search_places(req: Request, res: Response){
    const name = req.params.name;
    const placeService = new PlaceService;
    const user = await placeService.search_places(name)
    return res.json(user)
   }






   //Ver os Roteiros
   async info_places(req: Request, res: Response){
    const id = req.params.id;
    const placeService = new PlaceService();
    const placeShow = await placeService.places_info(id)
    return res.json(placeShow)
   }




   //Editar o Roteiro
   async edit(req: Request, res: Response){
    const tip = req.user_id;
    const id = req.params.id;
    const user_id:string = String(tip);
   
    const images = JSON.stringify(req.body.images);
    const trip_route = JSON.stringify(req.body.trip_route);
    const accommodations = JSON.stringify(req.body.accommodations);
    const restaurants = JSON.stringify(req.body.restaurants);
    const attractions = JSON.stringify(req.body.attractions);
  
    const {
        trip_title,
        trip_date_start,
        trip_date_end,
        description,
        country_id        
    } = req.body;

    const placeService = new PlaceService();
    const placeEdit = await placeService.add({
        id,
        user_id,
        trip_title,
        trip_date_start,
        trip_date_end,
        description,
        country_id,
        images,
        trip_route,
        accommodations,
        restaurants,
        attractions
    })

    return res.json(placeEdit)
   }



   

   //Deletar o Roteiro
   async delete(req: Request, res: Response){
    const id = req.params.id;
    const placeService = new PlaceService();
    const placeShow = await placeService.delete(id)
    return res.json(placeShow)
   }

   
}

export {PlaceController}