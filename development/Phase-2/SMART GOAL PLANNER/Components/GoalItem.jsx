export default function GoalItem({ goal, onDelete }) {
  const percent = Math.min(
    (goal.savedAmount / goal.targetAmount) * 100,
    100
  ).toFixed(1);
  const remaining = goal.targetAmount - goal.savedAmount;
  const deadline = new Date(goal.deadline);
  const now = new Date();
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const isWarning = daysLeft <= 30 && daysLeft >= 0 && goal.savedAmount < goal.targetAmount;

  return (
    <div>
      <div>
        <h3 >{goal.name}</h3>
        <button
          onClick={() => onDelete(goal.id)}
          
        >
          Delete
        </button>
      </div>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount.toLocaleString()}</p>
      <p>Saved: ${goal.savedAmount.toLocaleString()}</p>
      <p>Remaining: ${remaining.toLocaleString()}</p>
      <div >
        <div
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-sm">Progress: {percent}%</p>
      <p className="text-sm">Deadline: {goal.deadline}</p>
      {isOverdue && <p >Overdue!</p>}
      {isWarning && !isOverdue && <p >Deadline Approaching</p>}
    </div>
  );
}