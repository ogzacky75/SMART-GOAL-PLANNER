import React, { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState(0);
  const [goalId, setGoalId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;
    const newAmount = parseFloat(goal.savedAmount) + parseFloat(amount);
    onDeposit(goal.id, { savedAmount: newAmount });
    setAmount(0);
    setGoalId("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Make a Deposit</h2>
      <select
        value={goalId}
        onChange={(e) => setGoalId(e.target.value)}
        className="p-2 border rounded w-full"
        required
      >
        <option value="">Select a Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Deposit
      </button>
    </form>
  );
}