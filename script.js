const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔️';
  doneBtn.title = "Mark as done";
  doneBtn.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.title = "Delete task";
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);

  input.value = '';
});
