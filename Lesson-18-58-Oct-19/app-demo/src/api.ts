import axios from "axios";

import { Auth } from "./auth";
import { store } from "./store";
import { logout } from "./store/user";

/**
 * @deprecated
 * use axios instead
 */
export const BackendApi = {
  async get(url: URL | string) {
    const response = await fetch(url);
    const resultJson = await response.json();
    return { resultJson };
  },
};

export const api = axios.create();

api.interceptors.request.use((config) => {
  const token = Auth.getToken();
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

api.interceptors.response.use(
  (request) => {
    return request;
  },
  ({ response }) => {
    console.log(response);
    if (
      response.status === 401 ||
      response.status === 403 ||
      (response.status === 500 && response.data.message === "invalid token")
    ) {
      console.log("handled");
      store.dispatch(logout());
      Auth.removeToken();

      return response;
    }
    return response;
  },
);
