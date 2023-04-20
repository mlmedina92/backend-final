import { generateToken } from "../../utils.js";
import BasicUserDTO from "../DTOs/users/basicUser.dto.js";
import CreateUserDTO from "../DTOs/users/createUser.dto.js";
import FullUserDTO from "../DTOs/users/fullUser.dto.js";

export default class UsersRepository{
    constructor(dao){
        this.dao=dao
    }
    async create(user){
        const createUser=new CreateUserDTO(user)
        const userDAO= await this.dao.create(createUser)
        const fullUser=new FullUserDTO(userDAO)
        return fullUser
    }
    async login(userObj){
        const basicUser=new BasicUserDTO(userObj)
        const user = await this.dao.login(basicUser)
        if (user) { //si el us existe ccreo esas sesiones
            const token = generateToken(user)
            const fullUser= new FullUserDTO(user)
            return {'token':token, 'user':fullUser}
        }else{
            return null
        }
    }
}