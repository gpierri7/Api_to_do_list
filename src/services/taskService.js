const taskModel = require('../models/taskModel');

const addTask = (title) => {
    return taskModel.createTask(title);
};

const getTasks = () => {
    return taskModel.getTasks();
};

const getTaskById = (id) => {
    return taskModel.getTaskById(id);
};

const updateTask = (id, completed) => {
    return taskModel.updateTask(id, completed);
};

const deleteTask = (id) => {
    return taskModel.deleteTask(id);
};

module.exports = {
    addTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
