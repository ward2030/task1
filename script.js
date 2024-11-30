function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        const taskList = document.getElementById('tasks');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = ''; // مسح حقل الإدخال
    } else {
        alert('يرجى إدخال نص المهمة!');
    }
}
