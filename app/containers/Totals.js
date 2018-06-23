import { connect } from 'react-redux';
import TotalsTable from '../components/TotalsTable';

const mapStateToProps = ({ invoice: { subtotal } }) => {
  const TPS = 0.05;
  const TVQ = 0.0975;
  const tps = subtotal * TPS;
  const tvq = subtotal * TVQ;
  const total = subtotal + tps + tvq;
  return {
    subtotal,
    tps,
    tvq,
    total
  };
};

const Totals = connect(mapStateToProps)(TotalsTable);

export default Totals;
