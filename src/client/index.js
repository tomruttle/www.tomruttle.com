// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { APP_CONTAINER, APP_STATE_PROP } from '../common/constants';

import App from '../common/components/app';
import ScrollToTop from './components/scroll-to-top';

import './main.css';
import './require-images';

import type { AppPropsType } from '../common/types';

const container = document.getElementById(APP_CONTAINER);

const props: AppPropsType = window[APP_STATE_PROP];

render((
  <BrowserRouter>
    <ScrollToTop />
    <App {...props} />
  </BrowserRouter>
), container, () => {
  console.log('app rendered');
});
