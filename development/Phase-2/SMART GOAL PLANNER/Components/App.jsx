import React, { useEffect, useState } from "react";
import DepositForm from "./DepositForm";
import OverviewPanel from "./OverviewPanel";
import GoalForm from "./GoalForm";

const API = "http://localhost:3000/goals";


const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setGoals)
      .catch(console.error);
  }, []);

const updateGoal = (id, updates) => {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((goals) =>
          goals.map((g) => (g.id === id ? { ...g, ...updatedGoal } : g))
        );
      });
  };

const deleteGoal = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setGoals((goals) => goals.filter((g) => g.id !== id));
      });
  };

const addGoal = (newGoal) => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prev) => [...prev, data]));
  };

  return (
    <div >
      <h1 >Smart Goal Planner</h1>
      <OverviewPanel goals={goals} />
      <GoalForm onAdd={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} />
    </div>
  );

  export default App;
