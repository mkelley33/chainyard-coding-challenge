/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import createHistory from 'history/createBrowserHistory';
import Link from '../Link';

import s from '../Page/Page.css';
import api from '../../api/client/api';

class TransactionDetail extends Component {
  static propTypes = {
    hash: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      transaction: null,
    };
    this.onClickGoBack = this.onClickGoBack.bind(this);
  }
  componentDidMount() {
    this.history = createHistory();
    api
      .getByHash(this.props.hash, 'transactions')
      .then(res => this.setState({ transaction: res.data }))
      .catch(err => {
        throw Error(err);
      });
  }
  onClickGoBack() {
    this.history.goBack();
  }
  static renderDetail(transaction) {
    if (!transaction) return <div>Loading...</div>;
    /* eslint-disable camelcase */
    const {
      ver,
      vin_sz,
      vout_sz,
      lock_time,
      size,
      relayed_by,
      block_height,
      tx_index,
    } = { ...transaction };
    return (
      <ul>
        <li>
          <strong>Version: </strong>
          {ver}
        </li>
        <li>
          <strong>VIN Size: </strong>
          {vin_sz}
        </li>
        <li>
          <strong>VOUT Size: </strong>
          {vout_sz}
        </li>
        <li>
          <strong>Lock Time: </strong>
          {lock_time}
        </li>
        <li>
          <strong>Size: </strong>
          {size}
        </li>
        <li>
          <strong>Relayed By: </strong>
          {relayed_by}
        </li>
        <li>
          <strong>Block Height: </strong>
          {block_height}
        </li>
        <li>
          <strong>Transaction Index: </strong>
          {tx_index}
        </li>
      </ul>
    );
    /* eslint-enable camelcase */
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link to="#" onClick={this.onClickGoBack}>
            Go Back to Block
          </Link>
          <section>
            <h2 className={s.breakWord}>Transaction: {this.props.hash}</h2>
            {TransactionDetail.renderDetail(this.state.transaction)}
          </section>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TransactionDetail);
