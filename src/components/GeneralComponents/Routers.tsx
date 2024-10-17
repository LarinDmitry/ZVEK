import React, {Fragment, lazy} from 'react';
import {Route, createRoutesFromChildren, createBrowserRouter} from 'react-router-dom';
import PageLayout from './PageLayout';

const Main = lazy(() => import('pages/Main/MainView'));
const Details = lazy(() => import('pages/Details/DetailsView'));
const NotFound = lazy(() => import('pages/NotFound/NotFoundView'));

const Routers = () => (
  <Fragment>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Fragment>
);

export const router = createBrowserRouter(createRoutesFromChildren(Routers()));
