
let demoarray = [];

function renderTodo(todo) {
  localStorage.setItem("demoarray", JSON.stringify(demoarray));

  const list = document.querySelector(".todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted) {
    confirm("Are you sure ?");
    item.remove();
    return;
  }

  const isChecked = todo.checked ? "done" : "";
  const newlist = document.createElement("li");

  newlist.setAttribute("class", `todo-item ${isChecked}`);
  newlist.setAttribute("data-key", todo.id);
  newlist.innerHTML = `
<span>${todo.x}</span>
<button class="delete-todo js-delete-todo">
    <button class="delete-todo js-delete-todo">
        <svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
    </button>
`;

  if (item) {
    list.replaceChild(newlist, item);
  } else {
    list.append(newlist);
  }

}

function myFunction(x) {
  const todoobject = {
    x,
    checked: false,
    id: Date.now(),
  };

  demoarray.push(todoobject);

  renderTodo(todoobject);
  console.log(demoarray);
}

function toggleDone(b) {
  const index = demoarray.findIndex((myitem) => myitem.id === Number(b));
  demoarray[index].checked = !demoarray[index].checked;
  renderTodo(demoarray[index]);
}

function deleteTodo(c) {
  const index = demoarray.findIndex((myitem) => myitem.id === Number(c));
  const emptytodo = {
    deleted: true,
    ...demoarray[index],
  };
  demoarray = demoarray.filter((myitem) => myitem.id !== Number(c));
  renderTodo(emptytodo);
}


const form = document.querySelector(".forms");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector(".input");

  const text = input.value.trim();

  if (text !== "") {
    myFunction(text);
    input.value = "";
  }
});

const list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("demoarray");
  if (ref) {
    demoarray = JSON.parse(ref);
    demoarray.forEach((t) => {
      renderTodo(t);
    });
  }
});


const toggleDarkMode = document.querySelector('.toggle-dark-mode');

toggleDarkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
