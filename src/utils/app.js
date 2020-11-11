import cookie from 'js-cookie'

export function getCookie(key) {
    return cookie.get(key)
}
export function setCookie(key, val) {
    return cookie.set(key, JSON.stringify(val))
}
export function removeCookie() {
    return cookie.remove(['token', 'email'])
}