import prismaClient from '../../prisma'

interface LikesRequest{
    user_id:string,
    pid?:string;
    likes?:string
}

export class LikeService{

    async fetch({
        pid
    }: LikesRequest) {
       
    const FetchLike = await prismaClient.places.findFirst({
        where:{
        id:pid
        }, 
        select:{
        likes:true
        }
    })
    return FetchLike;
    }
    
    async handle({
        pid,
        user_id
    }: LikesRequest) {
       
    const addLike = await prismaClient.places.update({
        where:{
        id:pid
        },
        data:{
            likes: user_id
        }
    })
    return addLike;
    }
}