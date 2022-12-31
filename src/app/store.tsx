import { configureStore } from "@reduxjs/toolkit"
import reportsReducer from '../features/reports/reportSlice'

export const store = configureStore({
    reducer: {
        reports: reportsReducer
    }
})
