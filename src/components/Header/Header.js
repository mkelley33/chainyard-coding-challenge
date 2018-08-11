/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import chainUrl from './chain.svg';

class Header extends React.Component {
  render() {
    return (
      <header className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img
              className={s.chain}
              src={chainUrl}
              alt="The Chainyard Coding Challenge"
            />
            <span className={s.brandTxt}>The Chainyard Coding Challenge</span>
          </Link>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
