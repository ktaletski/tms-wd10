const TOKEN_STORAGE_KEY = "auth_token";

export const Auth = {
  setToken: (token: string) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  },
  getToken: () => localStorage.getItem(TOKEN_STORAGE_KEY),
  removeToken: () => localStorage.removeItem(TOKEN_STORAGE_KEY),
};
