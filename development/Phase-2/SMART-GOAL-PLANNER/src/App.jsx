import { useEffect, useState } from "react";
import { fetchGoals, createGoal, updateGoal, deleteGoal } from "./api";
import GoalList from "./Components/GoalList";
import GoalForm from "./Components/GoalForm";
import DepositForm from "./Components/DepositForm";
import OverviewPanel from "./Components/OverviewPanel";


export default function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAddGoal = (goal) => {
    createGoal(goal).then(newGoal => setGoals(prev => [...prev, newGoal]));
  };

  const handleUpdateGoal = (id, data) => {
    updateGoal(id, data).then(updated => {
      setGoals(prev => prev.map(goal => goal.id === id ? updated : goal));
    });
  };

  const handleDeleteGoal = (id) => {
    deleteGoal(id).then(() => {
      setGoals(prev => prev.filter(goal => goal.id !== id));
    });
  };

  return (
    <div >
      <h1 >SMART Goal Planner</h1>
      <OverviewPanel goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleUpdateGoal} />
      <GoalList goals={goals} onUpdate={handleUpdateGoal} onDelete={handleDeleteGoal} />
    </div>
  );
}
