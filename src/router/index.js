import React from 'react';

import Home from '../views/Home';
import Rank from '../views/Rank';
import Recommend from '../views/Recommend';
import Singers from '../views/Singers';

const routes = [
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        index: true,
        path: 'recommend',
        element: <Recommend/>,
      },
      {
        path: 'singers',
        element: <Singers/>,
      },
      {
        path: 'rank',
        element: <Rank/>,
      },
    ],
  },
];

export default routes;
