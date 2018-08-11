import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlockTable.css';
import api from '../../api/client/api';

class BlockTable extends Component {
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
  static renderRow(block) {
    return (
      <tr key={block.hash}>
        <td>{block.height}</td>
        <td>
          <span className={s['wrap-break-word']}>{block.hash}</span>
        </td>
        <td>{block.time}</td>
        <td>{block.main_chain.toString()}</td>
      </tr>
    );
  }
  render() {
    return (
      <div>
        <h2>Blocks: Today</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Height</th>
              <th>Hash</th>
              <th>Time</th>
              <th>Main Chain</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.blocks.length ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : (
              this.state.blocks.map(block => BlockTable.renderRow(block))
            )}
          </tbody>
        </table>
        {JSON.stringify(this.state.blocks)}
      </div>
    );
  }
}

export default withStyles(s)(BlockTable);
