import HomePage from "../home/HomePage";
import Offer from "../home/Offer/Offer";

const routes = [
    {path: '/' , exact: true, element: <HomePage/>},
    {path: '/a' , exact: true, element: <Offer/>},
]
export default routes