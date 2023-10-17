export const BackendApi = {
  async get(url: URL) {
    const response = await fetch(url);
    const resultJson = await response.json();
    return { resultJson };
  },
};
