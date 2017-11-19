const express = require('express');
const todoService = require('./todo-service');
const router = express.Router();

router.get('/', async (req, res) => {
    let todos = await todoService.getAll();
    res.json(todos);
});

router.get('/:id', async (req, res) => {
    let todo = await todoService.getById(req.params.id);
    res.json(todo);
});

router.post('/', async (req, res) => {
    let todoObject = { text: req.body.text };
    let todo = await todoService.save(todoObject);
    res.json(todo);
});

router.put('/:id', async (req, res) => {
    let todo = await todoService.update(req.params.id, { completed: !!req.body.completed });
    res.json(todo);
});

router.delete('/:id', async (req, res) => {
    let todo = await todoService.delete(req.params.id);
    res.json(todo);
});

module.exports = router;