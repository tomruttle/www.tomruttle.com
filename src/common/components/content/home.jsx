// @flow

import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import styles from './content.module.css';

import DangerousSection from './dangerous-section';

import page from '../../../../pages/home.md';

class Home extends PureComponent {
  render() {
    return (
      <div className={styles.content}>
        <DangerousSection content={page} />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
