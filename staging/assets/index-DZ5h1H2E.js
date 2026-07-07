(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function s(r,t){const n=t.trim();return n?[...r,{id:Date.now(),text:n,completed:!1}]:r}function c(r,t){return r.map(n=>n.id===t?{...n,completed:!n.completed}:n)}function d(r){return r.filter(t=>!t.completed)}function a(r){const t=r.length,n=r.filter(e=>e.completed).length,l=t-n;return{total:t,completed:n,pending:l}}function p(r){let t=[];function n(){const l=a(t);r.innerHTML=`
      <div class="wrapper">
        <h1>Pioneer DevOps Task Tracker</h1>
        <p class="subtitle">Capstone frontend app with CI/CD pipeline</p>

        <div class="controls">
          <input id="taskInput" type="text" placeholder="Enter a task" />
          <button id="addTaskBtn">Add Task</button>
          <button id="clearCompletedBtn">Clear Completed</button>
        </div>

        <div class="stats">
          <span>Total: ${l.total}</span>
          <span>Completed: ${l.completed}</span>
          <span>Pending: ${l.pending}</span>
        </div>

        <ul class="task-list">
          ${t.map(e=>`
              <li class="task-item ${e.completed?"done":""}">
                <label>
                  <input type="checkbox" data-id="${e.id}" ${e.completed?"checked":""} />
                  <span>${e.text}</span>
                </label>
              </li>
            `).join("")}
        </ul>
      </div>
    `,r.querySelector("#addTaskBtn").addEventListener("click",()=>{const e=r.querySelector("#taskInput");t=s(t,e.value),e.value="",n()}),r.querySelector("#clearCompletedBtn").addEventListener("click",()=>{t=d(t),n()}),r.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",o=>{t=c(t,Number(o.target.dataset.id)),n()})})}n()}const u=document.querySelector("#app");p(u);
