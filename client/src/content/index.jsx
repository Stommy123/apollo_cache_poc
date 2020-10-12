import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from '../components';
import { Home } from '../pages';
import {
  BustCache,
  CacheFirst,
  DefaultMutation,
  NetworkOnly,
  RefetchQueries,
  WriteQuery,
} from '../examples';

const Content = _ => (
  <>
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route exact path='/network-only' component={NetworkOnly} />
    <Route exact path='/cache-first' component={CacheFirst} />
    <Route exact path='/default-add-movies' component={DefaultMutation} />
    <Route exact path='/refetch-queries' component={RefetchQueries} />
    <Route exact path='/write-query' component={WriteQuery} />
    <Route exact path='/bust-cache' component={BustCache} />
  </>
);

export default Content;
