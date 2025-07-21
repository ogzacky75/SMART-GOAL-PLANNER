export default function OverviewPanel({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const goalsCompleted = goals.filter((g) => g.savedAmount >= g.targetAmount).length;
  const totalGoals = goals.length;

  return (
    <div>
      <h2 >Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
      <p>Goals Completed: {goalsCompleted}</p>
    </div>
  );
}
