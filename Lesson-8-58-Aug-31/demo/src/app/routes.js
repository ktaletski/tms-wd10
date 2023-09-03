export const ROUTES = {
  HOME: {
    path: '/',
  },
  FACT: {
    path: '/fact',
    build({ id } = {}) {
      const url = new URL(window.location.href);
      url.pathname = '/fact';
      url.searchParams.set('id', id);
      return url;
    },
  },
};
