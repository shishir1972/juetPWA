import { GET_ADMISSION_PROCEDURE_POINTS } from '../actions/actionTypes'

const initialState = {
    AdmissionData:undefined
}

const admissionHandler = (state = initialState,action) => {
           switch(action.type)
           {
               case GET_ADMISSION_PROCEDURE_POINTS:
                                                return {
                                                    ...state,
                                                    AdmissionData:action.payload
                                                }
               default : 
                          return state                                 
           }
}

export default admissionHandler
