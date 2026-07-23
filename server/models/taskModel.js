const db = require("../config/database");

const createTasks = (title, callback) => {
  const sql = `INSERT INTO tasks (title, status)
    VALUES (?, ?)`;

  db.query(sql, [title, 0], (err, result) => {
    callback(err, result);
  });
};

const getAllTasks = (callback) => {
  const sql = `SELECT * FROM tasks`;

  db.query(sql, (err, result) => {
    callback(err, result);
  });
};

const getTaskById = (id, callback) => {
  const sql = `SELECT * FROM tasks WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    callback(err, result);
  });
};

const deleteTaskById = (id, callback) => {
  const sql = `DELETE FROM tasks where id = ?`

  db.query(sql, [id], (err, result) => {
    callback(err, result)
  })
}


const updateTaskById = (id, title, callback) => {
  const sql = `UPDATE tasks SET title = ? WHERE id = ?`
  db.query (sql, [title, id], (err, result) => {
    callback(err, result)
  })
}

const updateTaskStatusById = (id, status, callback) => {
  const sql = `UPDATE tasks SET status = ? WHERE id = ?`
  db.query(sql, [id, status], (err, result) => {
    callback(err, result)
  })
}
module.exports = {
  createTasks,
  getAllTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  updateTaskStatusById
};
