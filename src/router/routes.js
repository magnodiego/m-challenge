import React from 'react';
import { rootPaths } from "./paths";

const ViewHome = React.lazy(() =>
  import('../pages/Home/Home')
);

export const rootRoutes = [
  {
    path: rootPaths.home,
    component: ViewHome,
  },
  {
    path: rootPaths.checkout,
    component: ViewHome,
  },
  {
    path: rootPaths.null,
    component: ViewHome,
  }
];
