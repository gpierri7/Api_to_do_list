let tasks = [];
let currentId = 1;

const createTask = (title) => {
    const task = {
        id: currentId++,
        title,
        completed: false
    };

    tasks.push(task);
    return task;
};

const getTasks = () => tasks;

const getTaskById = (id) => {
    return tasks.find(t => t.id == id);
};

const updateTask = (id, completed) => {
    const task = tasks.find(t => t.id == id);

    if (!task) return null;

    task.completed = completed;
    return task;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);

    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
