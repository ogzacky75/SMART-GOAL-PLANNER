import GoalItem from "./GoalItem";

export default function GoalList({ goals, onDelete }) {
  return (
    <div >
      <h2 >Your Goals</h2>
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} />
      ))}
    </div>
  );
}