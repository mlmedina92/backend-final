// limpio el dao

import UsersDBDTO from "../DTOs/users/usersDB.dto.js";
import UsersRespDTO from "../DTOs/users/usersResp.dto.js";

export default class UsersRepository{
    constructor(dao){
        this.dao=dao
    }
    async createUser(user){
        const userDBDTO=new UsersDBDTO(user)
        const userDAO= this.dao.create(userDBDTO)
        const usersRespDTO=new UsersRespDTO(userDAO)
        return usersRespDTO
    }
}