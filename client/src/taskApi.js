import axios from "axios"
const BASE_URL = "http://localhost:3000";

export const createTasks = (title) => {
    return axios.post(`${BASE_URL}/tasks`, {
        title
    })
};

export const deleteTask = (id) => {
    return axios.delete(`${BASE_URL}/tasks/${id}`)
}

export const updateTaskById = (id, title) => {
    return axios.put(`${BASE_URL}/tasks/${id}`, {
        title
    })
}

export const getTasks = () => {
    return axios.get(`${BASE_URL}/tasks`)
}