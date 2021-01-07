import PropTypes from "prop-types";
import s from "./Transactions.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.headerStyle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <tr>
              <td className={s.bodyStile}>{type}</td>
              <td className={s.bodyStile}>{amount}</td>
              <td className={s.bodyStile}>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
