import './vendor';
import './index.css';

import { FactDetailsPage } from './pages/fact-details';
import { FactListPage } from './pages/fact-list';
import { ROUTES } from './routes';
import { RouteService } from './services/router';

const root = document.getElementById('root');

RouteService.init()
  .on({
    route: ROUTES.HOME.path,
    run: () => {
      root.innerHTML = FactListPage({ loading: false });
    },
  })
  .on({
    route: ROUTES.FACT_DETAILS.path,
    run: ({ id }) => {
      root.innerHTML = FactDetailsPage({ id });
    },
  })
  .start();
