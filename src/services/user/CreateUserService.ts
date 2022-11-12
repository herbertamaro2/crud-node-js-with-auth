import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    name:  string;
    email: string;
    password: string;
}


class CreateUserService{
    async execute({name, email, password}: UserRequest) {
        console.log(name)
        if(!email){
            throw new Error("Email incorrect")
        }
        

        //ver se o email existe
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error("Email already exists")
        }

        //criptografa a senha
        const passwordHash = await hash(password, 8)


        //cria o usuário
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        return user;
    }
}

export { CreateUserService }