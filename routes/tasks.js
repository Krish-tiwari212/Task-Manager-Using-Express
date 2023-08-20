import express from "express"
import {getAllTask, createTask, getTask, deleteTask, updateTask} from "../controllers/tasks.js";
const router = express.Router();

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router