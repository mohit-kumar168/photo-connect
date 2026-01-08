import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
