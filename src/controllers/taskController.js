const taskService = require('../services/taskService');

// ler body
const getRequestBody = (req) => {
    return new Promise((resolve) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            resolve(body ? JSON.parse(body) : {});
        });
    });
};

// POST
const createTask = async (req, res) => {
    const body = await getRequestBody(req);

    if (!body.title) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ message: "Título obrigatório" }));
    }

    const task = taskService.addTask(body.title);

    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

// GET
const listTasks = (req, res) => {
    const tasks = taskService.getTasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};

// GET /:id
const getTaskById = (req, res, id) => {
    const task = taskService.getTaskById(id);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Tarefa não encontrada" }));
    }

    res.end(JSON.stringify(task));
};

// PUT
const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);

    const task = taskService.updateTask(id, body.completed);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Não encontrada" }));
    }

    res.end(JSON.stringify(task));
};

// DELETE
const deleteTask = (req, res, id) => {
    const success = taskService.deleteTask(id);

    if (!success) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Não encontrada" }));
    }

    res.end(JSON.stringify({ message: "Removida" }));
};

module.exports = {
    createTask,
    listTasks,
    getTaskById,
    updateTask,
    deleteTask
};
