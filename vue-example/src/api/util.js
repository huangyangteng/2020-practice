import http from './http'

const getError = () => http.get('/error/500')
const getRandomError = () => http.get('/error/random')
export const UTIL_API = {
    getError,
    getRandomError
}
