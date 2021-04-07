import http from './http'

const login = params => http.post('/user/login', params)
const getUserList = () => http.get('/user/list')
export const USER_API = {
    login,
    getUserList
}
