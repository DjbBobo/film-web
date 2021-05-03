import Cookies from 'js-cookie'

const TokenKey = 'Authorization'

export function getToken(key = '') {
    return Cookies.get(key || TokenKey)
}

export function setToken(token, expires = 60 * 12, key = '') {
    return Cookies.set(key || TokenKey, token, { expires: expires / (24 * 60) }) // expire 30min
}

export function removeToken(key = '') {
    return Cookies.remove(key || TokenKey)
}
