import { addTask, toggleTask, clearCompleted, getTaskStats } from './logic.js';

export function createApp(container) {
  let tasks = [];

  function render() {
    const stats = getTaskStats(tasks);

    container.innerHTML = `
      <div class="wrapper">
        <h1>Pioneer DevOps Task Tracker</h1>
        <p class="subtitle">Capstone frontend app with CI/CD pipeline</p>

        <div class="controls">
          <input id="taskInput" type="text" placeholder="Enter a task" />
          <button id="addTaskBtn">Add Task</button>
          <button id="clearCompletedBtn">Clear Completed</button>
        </div>

        <div class="stats">
          <span>Total: ${stats.total}</span>
          <span>Completed: ${stats.completed}</span>
          <span>Pending: ${stats.pending}</span>
        </div>

        <ul class="task-list">
          ${tasks
            .map(
              (task) => `
              <li class="task-item ${task.completed ? 'done' : ''}">
                <label>
                  <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''} />
                  <span>${task.text}</span>
                </label>
              </li>
            `
            )
            .join('')}
        </ul>
      </div>
    `;

    container.querySelector('#addTaskBtn').addEventListener('click', () => {
      const input = container.querySelector('#taskInput');
      tasks = addTask(tasks, input.value);
      input.value = '';
      render();
    });

    container.querySelector('#clearCompletedBtn').addEventListener('click', () => {
      tasks = clearCompleted(tasks);
      render();
    });

    container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        tasks = toggleTask(tasks, Number(event.target.dataset.id));
        render();
      });
    });
  }

  render();
}