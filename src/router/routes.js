import React from 'react';
import { rootPaths } from "./paths";

const ViewHome = React.lazy(() =>
  import('../pages/Home/Home')
);

const ViewCheckout = React.lazy(() =>
  import('../pages/Checkout/Checkout')
);

export const rootRoutes = [
  {
    path: rootPaths.home,
    component: ViewHome,
  },
  {
    path: rootPaths.checkout,
    component: ViewCheckout,
  },
];
