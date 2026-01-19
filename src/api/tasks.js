import axios from "axios";
import { API_URL } from "../utils/constants.js";

const api = axios.create({
  baseURL: API_URL,
});

export const taskApi = {
  getAll: () => api.get("/tasks"),
  getById: (id) => api.get(`/tasks/${id}`),
  create: (task) => api.post("/tasks", task),
  update: (id, task) => api.put(`/tasks/${id}`, task),
  delete: (id) => api.delete(`/tasks/${id}`),
};
