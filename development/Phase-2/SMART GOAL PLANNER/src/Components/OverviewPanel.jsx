function OverviewPanel({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const percentComplete = totalTarget ? ((totalSaved / totalTarget) * 100).toFixed(1) : 0;

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Saved: ${totalSaved}</p>
      <p>Total Target: ${totalTarget}</p>
      <p>Progress: {percentComplete}%</p>
    </div>
  );
}

export default OverviewPanel;