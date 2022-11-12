import prismaClient from '../../prisma'

interface PlaceRequest{
    user_id:string,
    id?:string;
    trip_title: string;
    trip_date_start: string;
    trip_date_end: string;
    description: string;
    country_id:string;
    images: string;
    trip_route: string;
    accommodations?: string;
    restaurants?: string;
    attractions?: string;

}

class PlaceService{

    async add({
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
        attractions,
    }: PlaceRequest) {
       
    const addPlace = await prismaClient.places.create({
        data:{
            user_id,
            trip_title: trip_title,
            trip_date_start:trip_date_start,
            trip_date_end: trip_date_end,
            description: description,
            country_id:country_id,
            images:images,
            trip_route:trip_route,
            accommodations: accommodations,
            restaurants:restaurants,
            attractions:attractions
        }
    })
    return addPlace;    
    }


    async show(id) {
       
        const showPlace = await prismaClient.places.findFirst({
            where: {
                id: id
            }
        })
        return showPlace;    
    }


    async edit({
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
        attractions,
    }: PlaceRequest) {
       
    const editPlace = await prismaClient.places.updateMany({
        where:{
        id: id
        },
        data:{
            trip_title: trip_title,
            trip_date_start:trip_date_start,
            trip_date_end: trip_date_end,
            description: description,
            country_id:country_id,
            images:images,
            trip_route:trip_route,
            accommodations: accommodations,
            restaurants:restaurants,
            attractions:attractions
        }
    })
    return editPlace;    
    }


    async places_info(id) {
       
        const showPlaces = await prismaClient.places.findMany({
            where: {
                user_id: id
            },
            select: {
                id: true,
                trip_route: true,
                trip_title:true
            }
        })
        return showPlaces;    
    }

    async delete(id) {
       
        const deletePlace = await prismaClient.places.delete({
            where: {
                id: id
            }
        })
        return deletePlace;
    }

    async search_places(name) {
       
        const showPlaces = await prismaClient.places.findMany({
            where: {
                trip_title:{ 
                startsWith: name
                }
            }
        })
        return showPlaces;    
    }



}

export {PlaceService}