function GoalCard({ goal }) {
  const { name, category, targetAmount, savedAmount, deadline } = goal;

  const progress = ((savedAmount / targetAmount) * 100).toFixed(1);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>
        Saved: ${savedAmount} / ${targetAmount} ({progress}%)
      </p>
      <p>Deadline: {deadline}</p>
    </div>
  );
}

export default GoalCard;