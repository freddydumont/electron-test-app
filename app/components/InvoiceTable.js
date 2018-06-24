import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'bloomer';
import isEmpty from 'lodash.isempty';
import TableRow from './TableRow';

class InvoiceTable extends React.Component {
  render() {
    const rows = [];
    if (!isEmpty(this.props.items)) {
      // eslint-disable-next-line
      for (const [name, value] of Object.entries(this.props.items)) {
        rows.push(
          <TableRow
            dispatch={this.props.dispatch}
            key={name}
            quantity={value.quantity}
            name={name}
            price={value.price}
          />
        );
      }
    }

    return (
      <Table isNarrow className="is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>QTY</th>
            <th>Name</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  items: state.invoice.items
});

export default connect(mapStateToProps)(InvoiceTable);
