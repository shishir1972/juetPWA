import { GET_ADMISSION_PROCEDURE_POINTS } from '../actionTypes'
import 'isomorphic-fetch'

export const admissionProcedure = ()=>{
      return dispatch => {
        fetch(`${process.env.FETCH_URL}/api/admission/procedures`)
        .then(res => res.json())
        .then(data => dispatch({ 
            type:GET_ADMISSION_PROCEDURE_POINTS,
            payload:data
        }))
      }
}