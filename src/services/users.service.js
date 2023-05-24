import usersDao from "../persistence/DAOs/usersFactory.js"

export const login = async (objUser) => {
    const user = await usersDao.login(objUser)
    return user
}

export const create = async (objUser) => {
    const newUser = await usersDao.create(objUser)
    return newUser
}