import BodyMainLandingPage from "./juet/LandingPage/bodyMain.jsx";
import About from '../src/About.jsx'
import FacultyListAll from './juet/faculty/FacultyListAll'
import AdmissionHome from './juet/Admissions/AdmissionMain'


export const routes = [
    {
        path: "/",
        component: BodyMainLandingPage,
        exact: true,
    },
    {
        path: "/About",
        component: About,
        exact: true,
    },
    {
        path: "/faculty",
        component: FacultyListAll,
        exact: true,
    },
    {
        path:"/admissions",
        component:AdmissionHome
    }
  ];
  