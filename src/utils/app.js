import cookie from 'js-cookie'

export function getToken() {
    return cookie.get('token')
}
export function setToken() {
    return cookie.set('token')
}
export function removeToken() {
    return cookie.remove('token')
}