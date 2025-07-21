const BASE_URL = "http://localhost:3000/goals";

export const fetchGoals = () => fetch(BASE_URL).then(res => res.json());

export const createGoal = (goal) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  }).then(res => res.json());

export const updateGoal = (id, updatedFields) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  }).then(res => res.json());

export const deleteGoal = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });