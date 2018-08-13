import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import api from '../../api/client/api';
import Link from '../Link/Link';
import s from '../Page/Page.css';

class BlockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
    };
  }
  componentDidMount() {
    this.fetchAllBlocksForToday();
  }
  fetchAllBlocksForToday() {
    api
      .getAllBlocksForOneDay()
      .then(res => this.setState({ blocks: res.data.blocks }))
      .catch(err => {
        throw Error(err);
      });
  }
  static renderHash(hash) {
    return (
      <h3>
        Hash:
        <span>
          <Link to={`/blocks/${hash}`} className={s.breakWord}>
            {` ${hash}`}
          </Link>
        </span>
      </h3>
    );
  }
  static renderListItem(block) {
    return (
      <li key={block.hash}>
        {this.renderHash(block.hash)}
        <ul>
          <li>
            <strong>Height:</strong> {block.height}
          </li>
          <li>
            <strong>Time:</strong> {block.time}
          </li>
          <li>
            <strong>Main Chain?</strong> {block.main_chain ? 'Yes' : 'No'}
          </li>
        </ul>
      </li>
    );
  }
  render() {
    return (
      <div className={s.root}>
        <section className={s.container}>
          <h2>Blocks: Today</h2>
          {!this.state.blocks.length ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {this.state.blocks.map(block => BlockList.renderListItem(block))}
            </ul>
          )}
        </section>
      </div>
    );
  }
}

export default withStyles(s)(BlockList);
