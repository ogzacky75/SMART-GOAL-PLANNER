import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", category: "", targetAmount: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;