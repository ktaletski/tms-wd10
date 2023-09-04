export const ROUTES = {
  HOME: {
    path: '/',
  },
  FACT_DETAILS: {
    path: '/fact',
    buildPath: ({ id } = {}) => {
      const url = new URL(window.location.href);
      url.pathname = '/fact';
      if (id) {
        url.searchParams.set('id', id);
      }
      return url.pathname + url.search;
    },
  },
};
