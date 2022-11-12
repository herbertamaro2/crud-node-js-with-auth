import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
){

    //Receba token
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ")

    try{

    //Valida Token
    const { sub } = verify(
        token,
        process.env.JWT_SECRET
        ) as Payload;
        //recuperar o id do token e transforma em uma variavel user_id do request
        req.user_id = sub;
        return next();

    }catch(err){

        return res.status(401).end();

    }
}