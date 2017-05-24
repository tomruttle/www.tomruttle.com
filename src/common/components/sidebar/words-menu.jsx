// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';

import type { List, Record } from 'immutable';

import pure from 'purecss/build/pure.css';

import type { PostType } from '../../types';

import styles from './sidebar.css';

function WordsMenu({ posts }: { posts: List<Record<PostType>> }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <hr className={pure['pure-u-1-2']} />
        <h4>Posts List</h4>
      </div>

      <nav>
        <ul className={styles.list}>
          {posts.toJS().map(({ metadata }) => (
            <li key={metadata.path} className={styles['list-item']}>
              <NavLink className={styles['list-link']} activeClassName={styles['list-link-selected']} to={`/words/${metadata.path}/`}>{metadata.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default WordsMenu;
