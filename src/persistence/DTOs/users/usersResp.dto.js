export default class UsersRespDTO {
    constructor(user) {
        this.fullName = user.full_name
        this.userDNI = user.dni
    }
}