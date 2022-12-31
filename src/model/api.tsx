import axios from "axios";
import { API_BASE_URL } from "../config";
import { Report } from "./Report";

let initialState : [Report];
export const getReports = () => {
  return axios
    .get(`${API_BASE_URL}/reports`)
    .then((response) => {
      let temp = response.data
      temp.forEach((report : Report, index: any) => {
        initialState.push(report)
      })
    })
    .catch((error) => console.log("error intentando obtener reportes" + error));
};

export const getReport = (id: string) => {
  return axios
    .get(`${API_BASE_URL}/reports/${id}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log("error intentando obtener reporte" + error));
};

export const saveReport = (data: Report) => {
  return axios
    .post(`${API_BASE_URL}/reports`, data)
    .then((response) => response.data.json())
    .catch((error) => console.log("error intentando crear reporte: " + error));
};

export const updateReport = (id: string, data: Report) => {
  return axios
    .patch(`${API_BASE_URL}/reports/${id}`, 
      data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    )
    .then((response) => response.data.json())
    .catch((error) =>
      console.log("error intentando actualizar reporte: " + error)
    );
};

export const deleteReport = (id: string) => {
  return axios
    .delete(`${API_BASE_URL}/reports/${id}`)
    .then((response) => response)
    .catch((error) =>
      console.log("error intentando eliminar reporte: " + error)
    );
};
