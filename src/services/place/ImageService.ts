import prismaClient from '../../prisma'

interface ImageRequest{
    id?:string;
    user_id:string,
    place_id:string,
    name:string,
    description:string,
    file:string,
    active:boolean
}

export class ImageService{


    async images({
        user_id,
        name,
        description,
        file,
        active

    }: ImageRequest) {
       
    const addImages = await prismaClient.images.create({
        data:{
            user_id,
            name:name,
            description:description,
            file:file,
            active:active
        }
    })
    return addImages;    
    }

}

