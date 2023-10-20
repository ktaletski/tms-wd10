export const BackendApi = {
  async get(url: URL | string) {
    const response = await fetch(url);
    const resultJson = await response.json();
    return { resultJson };
  },
};
