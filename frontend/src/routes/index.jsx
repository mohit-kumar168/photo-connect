import { createHashRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home";
import Magazines from "../pages/Magazines";
import Blogs from "../pages/Blogs";

const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "magazines",
				element: <Magazines />
			},
			{
				path: "blogs",
				element: <Blogs />
			}
		],
	},
])

export default router;
