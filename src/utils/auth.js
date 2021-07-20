import Cookies from "js-cookie";
import { verify } from "jsonwebtoken";

const TokenKey = "accessToken";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function isAuthenticated(token) {
  try {
    const decoded = verify(token, "moloch something i dont know");
    const exp = decoded.exp;
    // console.log(exp)
    const now_timestamp = Date.now() / 1000;
    if (exp < now_timestamp) {
      return false;
    }
    return true;
    // if ()
  } catch (err) {
    return false;
  }
}
