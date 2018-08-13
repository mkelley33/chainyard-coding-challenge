import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from '../Page/Page.css';
import Link from '../Link';
import api from '../../api/client/api';

class BlockDetail extends Component {
  static propTypes = {
    hash: PropTypes.string,
  };
  static defaultProps = {
    hash: '',
  };
  constructor(props) {
    super(props);
    this.state = { block: null };
  }
  componentDidMount() {
    this.fetchBlock();
  }
  fetchBlock() {
    if (this.props.hash) {
      api
        .getByHash(this.props.hash)
        .then(res => {
          this.setState({ block: res.data });
        })
        .catch(err => {
          throw Error(err);
        });
    } else {
      api
        .getLatestBlock()
        .then(res => {
          this.setState({ block: res.data });
        })
        .catch(err => {
          throw Error(err);
        });
    }
  }
  static renderDetail(block) {
    if (!block) return <div>Loading...</div>;
    /* eslint-disable camelcase */
    const {
      ver,
      prev_block,
      mrkl_root,
      time,
      bits,
      nonce,
      n_tx,
      size,
      block_index,
      main_chain,
      height,
      received_time,
      relayed_by,
      tx,
    } = { ...block };
    return (
      <ul>
        <li>
          <strong>Version: </strong>
          {ver}
        </li>
        <li className={s.breakWord}>
          <strong>Previous Block: </strong>
          {prev_block}
        </li>
        <li className={s.breakWord}>
          <strong>MRKL Root: </strong>
          {mrkl_root}
        </li>
        <li>
          <strong>Time: </strong>
          {time}
        </li>
        <li>
          <strong>Bits: </strong>
          {bits}
        </li>
        <li>
          <strong>Nonce: </strong>
          {nonce}
        </li>
        <li>
          <strong>Number of Transactions: </strong>
          {n_tx}
        </li>
        <li>
          <strong>Size: </strong>
          {size}
        </li>
        <li>
          <strong>Block Index: </strong>
          {block_index}
        </li>
        <li>
          <strong>Main Chain: </strong>
          {main_chain}
        </li>
        <li>
          <strong>Height: </strong>
          {height}
        </li>
        <li>
          <strong>Received Time: </strong>
          {received_time}
        </li>
        <li>
          <strong>Relayed by: </strong>
          {relayed_by}
        </li>
        <li>{BlockDetail.renderTransactions(tx)}</li>
      </ul>
    );
    /* eslint-enable camelcase */
  }
  static renderTransactions(transactions) {
    if (!transactions) return <div>No Transactions</div>;
    return (
      <section>
        <h3>Transactions</h3>
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.hash}>
              <Link
                className={s.breakWord}
                to={`/transactions/${transaction.hash}`}
              >
                {transaction.hash}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            <Link to="/">Back to Blocks</Link>
          </div>
          <section>
            <h2 className={s.breakWord}>
              {!this.props.hash ? 'Latest ' : ''}Block: {this.props.hash}
            </h2>
            {BlockDetail.renderDetail(this.state.block)}
          </section>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BlockDetail);
