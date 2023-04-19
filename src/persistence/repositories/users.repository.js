// limpio el dao

import UsersDBDTO from "../DTOs/users/usersDB.dto.js";
import UsersRespDTO from "../DTOs/users/usersResp.dto.js";
import { generateToken } from "../../utils.js";

export default class UsersRepository{
    constructor(dao){
        this.dao=dao
    }
    async create(user){
        const userDBDTO=new UsersDBDTO(user)
        const userDAO= await this.dao.create(userDBDTO)
        const usersRespDTO=new UsersRespDTO(userDAO)
        return usersRespDTO
    }
    async login(userObj){
        const { email, password } = userObj
        const user = await this.dao.login(userObj)
        if (user) { //si el us existe ccreo esas sesiones
            const token = generateToken(user)
            req.session.email = email //creo sesion
            req.session.password = password //creo sesion
            req.session.userName = user.first_name
            req.session.role = user.role
            res.cookie('token', token, {httpOnly: true}).redirect('/') //redireccion a home, httpOnly hace que la info del token no pueda ser extraido en el front
        } else {
            res.redirect('/users/errorLogin')// si no exite lo lleva a otra vista
        }
    }
}