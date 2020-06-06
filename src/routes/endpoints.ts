import { RouteProps } from "react-router-dom";
import Home from "../containers/home";
import Sobre from "../containers/sobre";


interface EndPointsProps extends RouteProps {
    name?: string
}

const publicUrl = process.env.PUBLIC_URL;

export const endpoints: EndPointsProps[] = [
    { path: `${publicUrl}/`, component: Home, exact: true },
    { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
    { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
];
