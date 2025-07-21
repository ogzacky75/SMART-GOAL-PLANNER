import { useState } from "react";

function DepositForm({ goalId, onDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;