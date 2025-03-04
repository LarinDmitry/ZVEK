import React, {Fragment} from 'react';
import {Route, createRoutesFromChildren, createHashRouter} from 'react-router-dom';
import PageLayout from './PageLayout';

import Welcome from 'pages/Welcome/WelcomeView';
import Main from 'pages/Main/MainView';
import Details from 'pages/Details/DetailsView';
import Compare from 'pages/Compare/CompareView';
import Statistic from 'pages/Statistic/StatisticView';
import Contacts from 'pages/Contacts/ContactsView';
import BossHP from 'pages/BossHP/BossHPView';
import NotFound from 'pages/NotFound/NotFoundView';

const Routers = () => (
  <Fragment>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/main" element={<Main />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/compare/:id" element={<Compare />} />
      <Route path="/statistic" element={<Statistic />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/bossHP" element={<BossHP />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Fragment>
);

export const router = createHashRouter(createRoutesFromChildren(Routers()));
