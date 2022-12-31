import { createSlice } from "@reduxjs/toolkit";
import { Report } from "../../model/Report";

const initialState : Report[] = [
  {
    id: "1",
    title: "Mi otro titulo",
    description: "mi descripcion",
    price: 9191,
    content: "Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis.",
  },
  {
    id: "2",
    title: "Mi titulo",
    description: "mi descripcion",
    price: 4466,
    content: "Lorem ipsum dolor sit amet, consectetur. Laborum voluptas velit eius, cupiditate suscipit voluptas, vero iusto magnam est? Officiis.",
  },
];

export const reportSlice = createSlice({
  name: "report",
  initialState: initialState, 
  reducers: {
    addReport: (state, action) => {
      console.log(state, action);
      state.push(action.payload)
    }
  },
});

export const { addReport }=  reportSlice.actions
export default reportSlice.reducer;
