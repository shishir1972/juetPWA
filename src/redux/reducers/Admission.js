import { GET_ADMISSION_PROCEDURE_POINTS, GET_ADMISSION_PROGRAMMES_DETAILS } from '../actions/actionTypes'

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
               
               case GET_ADMISSION_PROGRAMMES_DETAILS : 
                                            return {
                                                ...state,
                                                AdmissionProgrammes:action.payload
                                            }                                 
               default : 
                          return state                                 
           }
}

export default admissionHandler
