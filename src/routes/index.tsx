import { useRoutes } from "react-router-dom"
import Home from "./home/Home"
import Details from "./details/Details"
import Wishlist from "../components/wishlist/Wishlist"

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    {
      path: "/wishlist",
      element: <Wishlist/>
    },
    {
      path: "/details/:id",
      element: <Details/>
    },
  ])
}

export default RouterController