const { response } = require("express");
const taskModel = require("../models/taskModel");

const getAllTasks = (req, res) => {
  taskModel.getAllTasks((err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Gagal menampilkan Task",
      });
    }
    return res.status(201).json(result);
  });
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  taskModel.getTaskById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: `gagal menampilkan data dengan id = ${id}`,
      });
      console.log(err);
    } else if (result.length === 0) {
      return res.status(404).json({
        message: `tasks dengan id ${id} tidak ditemukan`,
      });
    }
    return res.status(200).json(result[0]);
  });
};

const createTasks = (req, res) => {
  const { title } = req.body;
  if (!title) {
    console.log("Tidak lolos validasi");
    return res.status(400).json({
      message: "title wajib diisi",
    });
  }
  taskModel.createTasks(title, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Gagal menyimpan task",
      });
    }

    return res.status(201).json({
      message: "Berhasil menambahkan task",
      id: result.insertId,
    });
  });
};

const updateTasksById = (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Task wajib diisi",
    });
  }

  taskModel.updateTaskById(id, title, (err, result) => {
    console.log(err);
    console.log(result);
    if (err) {
      return res.status(500).json({
        message: "Gagal update Task",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: `Data dengan id = ${id} tidak ditemukan`,
      });
    }
    res.status(200).json({
      message: "Task berhasil di update",
    });
  });
};

const deleteTaskById = (req, res) => {
  const id = req.params.id;
  taskModel.deleteTaskById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Task gagal dihapus",
      });
    } else if (result.affectedRows === 0) {
      return res.status(404).json({
        message: `Task dengan id = ${id} tidak ditemukan`,
      });
    }
    res.status(200).json({
      message: "Task berhasil dihapus",
    });
  });
};

const updateTaskStatusById = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  taskModel.updateTaskStatusById(id, status, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Gagal update task",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: `task dengan id = ${id} tidak ditemukan`,
      });
    }
    return res.status(200).json({
      message: "Task berhasil di update",
    });
  });
};

module.exports = {
  getAllTasks,
  createTasks,
  getTaskById,
  deleteTaskById,
  updateTasksById,
  updateTaskStatusById
};
