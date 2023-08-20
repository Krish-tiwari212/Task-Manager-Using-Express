import Task from "../models/task.js"

export const getAllTask = async (req, res)=>{
    try{
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
    } catch (error){
        res.status(500).json({ msg: error })
    }
}

export const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }catch (error){
        res.status(500).json({ msg: error })
    }
}

export const deleteTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params
        const del = await Task.findOneAndDelete({_id:taskID})
        if(!del){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({del})
    }catch (error){
        res.status(500).json({ msg: error })
    }
}

export const getTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }catch (error){
        res.status(500).json({ msg: error })
    }
}