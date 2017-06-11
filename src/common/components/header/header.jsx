// @flow

import React from 'react';

import type { SiteRoutes } from '../../types';

import { getAbsolutePath, findRoute } from '../../routing-helpers';

import { routeKeys, DEFAULT_TITLE } from '../../constants';

import { PaddedHeader, TitleLink, HeaderList, HeaderListItem, HeaderListLink, activeClassName } from './header.styles';

export default function Header({ routes }: { routes: SiteRoutes }) {
  const links = routes.filter((route) => route.get('title'));
  const homeRoute = findRoute(links, routeKeys.HOME);

  return (
    <PaddedHeader className="pure-u-1 pure-u-md-3-4 offset-md-1-4">
      <h2><TitleLink to={homeRoute.get('path')}>{DEFAULT_TITLE}</TitleLink></h2>

      <nav>
        <HeaderList>
          {links.map((link) => {
            const path: string = link.get('path');
            const absolutePath = getAbsolutePath(path);

            return (
              <HeaderListItem key={`header-${link.get('key')}`}>
                <HeaderListLink
                  exact={path === absolutePath}
                  activeClassName={activeClassName}
                  to={absolutePath}
                >{link.get('title')}</HeaderListLink>
              </HeaderListItem>
            );
          })}
        </HeaderList>
      </nav>
    </PaddedHeader>
  );
}
