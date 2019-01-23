import { GET_ADMISSION_PROGRAMMES_DETAILS } from '../actionTypes'
import 'isomorphic-fetch'

export const admissionProgrammes = ()=>{
      return dispatch => {
        fetch(`${process.env.FETCH_URL}/api/admission/programmes`)
        .then(res => res.json())
        .then(data => dispatch({ 
            type:GET_ADMISSION_PROGRAMMES_DETAILS,
            payload:data
        }))
      }
}