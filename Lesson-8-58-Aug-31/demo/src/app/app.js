import './vendor';
import './index.css';

import { FactDetailsPage } from './pages/fact-details';
import { FactListPage } from './pages/fact-list';
import { ROUTES } from './routes';
import { RouterService } from './services/router/router';

const root = document.getElementById('root');

RouterService.init().on({
  route: ROUTES.HOME.path,
  run: () => {
    root.innerHTML = FactListPage();
  },
}).on({
  route: ROUTES.FACT.path,
  run: ({ id }) => {
    root.innerHTML = FactDetailsPage({ id });
  },
}).start();
