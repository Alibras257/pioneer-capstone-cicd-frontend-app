export function addTask(tasks, text) {
  const trimmed = text.trim();
  if (!trimmed) return tasks;
  return [...tasks, { id: Date.now(), text: trimmed, completed: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

export function clearCompleted(tasks) {
  return tasks.filter((task) => !task.completed);
}

export function getTaskStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  return { total, completed, pending };
}