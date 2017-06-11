// @flow

import React from 'react';

import type { SiteRoutes } from '../../types';

import { getAbsolutePath, getRouteFromKey } from '../../routing-helpers';

import { routeKeys, DEFAULT_TITLE } from '../../constants';

import { PaddedHeader, TitleLink, HeaderList, HeaderListItem, HeaderListLink, activeClassName } from './header.styles';

export default function Header({ routes }: { routes: SiteRoutes }) {
  const homeRoute = getRouteFromKey(routes, routeKeys.HOME);

  return (
    <PaddedHeader className="pure-u-1 pure-u-md-3-4 offset-md-1-4">
      {homeRoute ? (
        <h2><TitleLink to={homeRoute.get('path')}>{DEFAULT_TITLE}</TitleLink></h2>
      ) : null}

      <nav>
        <HeaderList>
          {routes.filter((route) => route.get('path')).map((route) => {
            const path: string = route.get('path');
            const absolutePath = getAbsolutePath(path);

            return (
              <HeaderListItem key={`header-${route.get('key')}`}>
                <HeaderListLink
                  exact={path === absolutePath}
                  activeClassName={activeClassName}
                  to={absolutePath}
                >{route.get('title')}</HeaderListLink>
              </HeaderListItem>
            );
          })}
        </HeaderList>
      </nav>
    </PaddedHeader>
  );
}
