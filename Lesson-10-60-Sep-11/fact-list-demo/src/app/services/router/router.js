export const RouteService = {
  init() {
    this.registeredRoutes = {};

    window.addEventListener('popstate', () => {
      this.__handleCurrentRoute();
    });

    return this;
  },
  push(path) {
    window.history.pushState({}, null, path);
    this.__handleCurrentRoute();
  },
  on({ route, run }) {
    this.registeredRoutes[route] = {
      onRoute: () => {
        const url = new URL(window.location.href);
        run(Object.fromEntries(url.searchParams.entries()));
      },
    };
    return this;
  },
  start() {
    this.__handleCurrentRoute();
  },

  __handleCurrentRoute() {
    const currentPath = window.location.pathname;
    const route = this.registeredRoutes[currentPath];
    route?.onRoute();
  },
};
