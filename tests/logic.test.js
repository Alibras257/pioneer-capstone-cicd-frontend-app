import { addTask, toggleTask, clearCompleted, getTaskStats } from '../src/logic.js';

describe('task logic', () => {
  test('addTask adds a non-empty task', () => {
    const result = addTask([], 'Learn GitHub Actions');
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Learn GitHub Actions');
    expect(result[0].completed).toBe(false);
  });

  test('toggleTask toggles completion state', () => {
    const tasks = [{ id: 1, text: 'Test app', completed: false }];
    const result = toggleTask(tasks, 1);
    expect(result[0].completed).toBe(true);
  });

  test('clearCompleted removes completed tasks', () => {
    const tasks = [
      { id: 1, text: 'Done', completed: true },
      { id: 2, text: 'Pending', completed: false }
    ];
    const result = clearCompleted(tasks);
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Pending');
  });

  test('getTaskStats returns correct counts', () => {
    const tasks = [
      { id: 1, text: 'One', completed: true },
      { id: 2, text: 'Two', completed: false }
    ];
    expect(getTaskStats(tasks)).toEqual({
      total: 2,
      completed: 1,
      pending: 1
    });
  });
});