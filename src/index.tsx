/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import { RouteDefinition, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import Layout from './layout';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./routes/index.js')),
  },
  {
    path: '/game-details/:id',
    component: lazy(() => import('./routes/game-details/index.js')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404.js')),
  },
];

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => <Router root={Layout}>{routes}</Router>,
  root,
);
