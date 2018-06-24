import React from 'react';
import accounting from 'accounting-js';
import { Delete } from 'bloomer';
import { removeProduct } from '../actions';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteHovered: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({ deleteHovered: !prevState.deleteHovered }));
  }

  render() {
    const { quantity, name, price, dispatch } = this.props;
    return (
      <tr
        className={
          this.state.deleteHovered
            ? 'has-background-danger has-text-white'
            : undefined
        }
      >
        <td>{quantity}</td>
        <td>{name}</td>
        <td className="has-text-right">{accounting.formatMoney(price)}</td>
        <td>
          <Delete
            className="has-background-danger"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={() => dispatch(removeProduct(name, price))}
          />
        </td>
      </tr>
    );
  }
}

export default TableRow;
