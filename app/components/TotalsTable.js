import React from 'react';
import { Table } from 'bloomer';
import accounting from 'accounting-js';

const TotalsTable = ({ subtotal, tps, tvq, total }) => (
  <Table isNarrow className="is-fullwidth is-hoverable">
    <tbody>
      <tr>
        <th>Subtotal</th>
        <td className="has-text-right">{accounting.formatMoney(subtotal)}</td>
      </tr>
      <tr>
        <th>TPS</th>
        <td className="has-text-right">{accounting.formatMoney(tps)}</td>
      </tr>
      <tr>
        <th>TVQ</th>
        <td className="has-text-right">{accounting.formatMoney(tvq)}</td>
      </tr>
      <tr>
        <th>Total</th>
        <td className="has-text-right">{accounting.formatMoney(total)}</td>
      </tr>
    </tbody>
  </Table>
);

export default TotalsTable;
