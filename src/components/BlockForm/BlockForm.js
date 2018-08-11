import React, { Component } from 'react';

class BlockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
      block: {},
    };
    this.onChangeHash = this.onChangeHash.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickBlockHash = this.onClickBlockHash.bind(this);
    this.onClickTransactionHash = this.onClickTransactionHash.bind(this);
    this.onClickGetLatestBlock = this.onClickGetLatestBlock.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({ block: {} });
    // TODO: how to distinguish between block and transaction hash
  }
  onChangeHash(event) {
    this.setState({ hash: event.target.valueOf });
  }
  onClickBlockHash(event) {
    event.preventDefault();
    this.setState({ block: {} });
  }
  onClickTransactionHash(event) {
    event.preventDefault();
    this.setState({ block: {} });
  }
  onClickGetLatestBlock(event) {
    event.preventDefault();
    this.setState({ block: {} });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <span>Find by:</span>
          <button onClick={this.onClickBlockHash}>Block Hash</button>
          <button onClick={this.onClickTransactionHash}>
            Transaction Hash
          </button>
          <input
            type="text"
            onChange={this.onChangeHash}
            value={this.state.hash}
          />
          <div>
            Or
            <button onClick={this.onClickGetLatestBlock}>
              Get Latest Block
            </button>
          </div>
        </form>
        <div>{this.state.block}</div>
      </div>
    );
  }
}

export default BlockForm;
