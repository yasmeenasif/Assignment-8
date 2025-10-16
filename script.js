// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.className = "list-group-item";

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-success btn-sm me-2 complete-btn">✔</button>
      <button class="btn btn-danger btn-sm delete-btn">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";


  // Mark complete
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
});

// Travel Check List
const tasks = ["Hotel Booking", "Sites to Visit", "Air Tickets", "Travel Documents", "First Aid Kid", "Clothings", "Toiletries", "Tech Essentials", "Reusable Water Bottles"];
const taskList1 = document.getElementById("taskList1");

tasks.forEach(taskText => {
  const li = document.createElement("li");
  li.className = "list-group-item";
 
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-success btn-sm me-2 complete-btn">✔</button>
      <button class="btn btn-danger btn-sm delete-btn">🗑</button>
    </div>
  `;

   taskList1.appendChild(li);
  
   // Mark complete
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
});

