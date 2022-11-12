import prismaClient from '../../prisma'

interface UserRequest{
    id?: string;
    name: string;
    email?:string;
    password?: string;
}

class UserService{

    
    async show(id) {
       
        const show = await prismaClient.user.findFirst({
            where: {
                id:id
            }
        })
        return show;    
    }
    
    async show_user(name) {
       
        const showUser = await prismaClient.user.findMany({
            where: {
                name:{ 
                contains: name
                }
            }
        })
        return showUser;    
    }


    async edit({
        id,
       name,
       email,
       password
    }: UserRequest) {
       
    const editUser = await prismaClient.user.updateMany({
        where:{
        id: id
        },
        data:{
            name,
            email,
            password
        }
    })
    return editUser;    
    }



}

export {UserService}