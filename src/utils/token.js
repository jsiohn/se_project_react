const tokenKey = "jwt";

export const setToken = (token) => localStorage.setItem(tokenKey, token);

export const getToken = () => {
  localStorage.getItem(tokenKey);
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};
