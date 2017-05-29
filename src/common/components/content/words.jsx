// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import type { List, Record } from 'immutable';
import type { Post } from '../../types';

import styles from './content.module.css';

import DangerousSection from './dangerous-section';

function Words({ posts }: { posts: List<Record<Post>> }) {
  return (
    <div className={styles.content}>
      <Switch>
        {posts.toJS().map(({ metadata, words }) => (
          <Route
            key={metadata.fileName}
            path={`/words/${metadata.path}/`}
            render={() => <DangerousSection content={words} />}
          />
        ))}
        <Route
          render={() => (
            <section>
              <h4>Words</h4>
              <p>Select a post and read it, fool!</p>
            </section>
          )}
        />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(Words);
