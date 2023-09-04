export const RouterService = {
  init() {
    this.registeredRoutes = {};

    window.addEventListener('popstate', () => {
      this.__handleRouteChange();
    });

    return this;
  },
  push(urlPath) {
    window.history.pushState({}, undefined, urlPath);
    this.__handleRouteChange();
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
    this.__handleRouteChange();
  },

  __handleRouteChange() {
    const route = this.registeredRoutes[window.location.pathname];
    route?.onRoute();
  },
};
