import { setReports, startLoadingReports } from './reportSlice'

export const getPokemons = (page = 0) => {
    return async ( dispatch: (arg0: { payload: undefined; type: "report/startLoadingReports"; }) => void, getState: any) => {
        dispatch(startLoadingReports());
        
        //Todo pending http request

    }
}