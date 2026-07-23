const formidable = require('formidable');
const { create, get, remove } = require('../model/todo')

exports.create = async (req, res) => {
  console.log('--- CREATE CONTROLLER HIT ---');
  console.log('req.body received:', req.body);

  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }

  try {
    // Assuming 'create' is your database helper function to insert the task
    const newTask = await create(description); 
    return res.status(201).send({ data: newTask.rows[0] });
  } catch (error) {
    return res.status(400).json({ error: error.message || error });
  }
};

exports.read = async (req, res) => {
    try {
        const task = await get();
        return res.json({ data: task.rows });

    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};

exports.removeTodo = async (req, res) => {
    try {
     const { id } = req.params;

        await remove(id);
        return res.status(200).send({ data: id });

    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};