import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/client/api';

class BlockDetail extends Component {
  static propTypes = {
    hash: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { block: null };
  }
  componentDidMount() {
    this.fetchBlock();
  }
  fetchBlock() {
    api
      .getByHash(this.props.hash)
      .then(res => {
        this.setState({ block: res.data });
      })
      .catch(err => {
        throw Error(err);
      });
  }
  render() {
    return (
      <section>
        <h2>Block: {this.props.hash}</h2>
        {JSON.stringify(this.state.block)}
      </section>
    );
  }
}

export default BlockDetail;
