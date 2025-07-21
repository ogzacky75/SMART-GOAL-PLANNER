import React, { useState } from "react";

export default function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
    savedAmount: 0,
    createdAt: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      category: "",
      targetAmount: "",
      deadline: "",
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Add New Goal</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal Name"
        className="p-2 border rounded w-full"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        placeholder="Target Amount"
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="p-2 border rounded w-full"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Goal
      </button>
    </form>
  );
}