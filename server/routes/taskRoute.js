const express = require('express')
const taskController = require('../controllers/taskController')
const router = express.Router()

router.post('/', taskController.createTasks)
router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getTaskById)
router.delete('/:id', taskController.deleteTaskById), 
router.put('/:id', taskController.updateTasksById)
router.patch('/:id/status', taskController.updateTaskStatusById)

module.exports = router