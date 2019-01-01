import BodyMainLandingPage from "./juet/LandingPage/bodyMain.jsx";
import About from '../src/About.jsx'
import FacultyMain from './juet/faculty/index'

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
        path: "/juet/faculty",
        component: FacultyMain,
        exact: true,
    }
  ];
  