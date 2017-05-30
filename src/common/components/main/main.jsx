// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import type { List, Map } from 'immutable';

import Home from '../content/home';
import Words from '../content/words';
import WordsMenu from '../sidebar/words-menu';
import NotFound from '../content/not-found';

import type { Post } from '../../types';

import styles from './main.module.css';

function Main({ posts }: { posts: List<Map<Post>> }) {
  return (
    <div className={styles.main}>
      <section className={styles.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/words/:path?" render={() => <Words posts={posts} />} />
          <Route component={NotFound} />
        </Switch>
      </section>

      <aside className={styles.sidebar}>
        <Switch>
          <Route path="/words/:path?" render={() => <WordsMenu posts={posts} />} />
        </Switch>
      </aside>
    </div>
  );
}

export default withStyles(styles)(Main);
