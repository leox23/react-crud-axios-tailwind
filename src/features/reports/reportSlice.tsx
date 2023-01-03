import { createSlice } from "@reduxjs/toolkit";
import { Report } from "../../model/Report";

const initialState: Report[] = [
  {
    id: "1",
    title: "Mi otro titulo",
    description: "mi descripcion",
    price: 9191,
    content:
      "Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis.",
  },
  {
    id: "2",
    title: "Mi titulo",
    description: "mi descripcion",
    price: 4466,
    content:
      "Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis.",
  },
];

export const reportSlice = createSlice({
  name: "report",
  initialState: initialState, //aqui luego hay que poner el objeto vacio
  reducers: {
    startLoadingReports: (state) => {

    },
    setReports: (state, actions) => {
      
    },
    addReport: (state, action) => {
      console.log(state, action);
      state.push(action.payload);
    },
    editReport: (state, action) => {
      const { id, title, description, price, content } = action.payload;
      const foundReport = state.find((report) => report.id === id);
      if (foundReport) {
        foundReport.title = title;
        foundReport.description = description;
        foundReport.price = price;
        foundReport.content = content;
      }
    },
    deleteReport: (state, action) => {
      const reportFound = state.find((report) => report.id === action.payload);
      if (reportFound) {
        state.splice(state.indexOf(reportFound), 1);
      }
    },
  },
});

export const {
  startLoadingReports,
  setReports,
  addReport,
  deleteReport,
  editReport,
} = reportSlice.actions;
export default reportSlice.reducer;
