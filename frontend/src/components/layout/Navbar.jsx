import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"
import logo_light2 from "../../assets/logo_light2.png"
import logo_dark from "../../assets/logo_dark.png"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<nav className="sticky top-0 z-50 backdrop-blur-xl">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link to="/" onClick={closeMenu}>
						<img
							src={logo_light2}
							alt="logo"
							className="h-10 sm:h-12 w-auto"
						/>
					</Link>

					{/* Desktop Navigation Links */}
					<ul className="hidden lg:flex items-center gap-6 xl:gap-8">
						<li>
							<NavLink
								to="/"
								end
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/photos"
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								Photos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/magazines"
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								Magazines
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blog"
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about-us"
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact-us"
								className={({ isActive }) =>
									`text-gray-700 hover:text-gray-900 pb-1 border-b-2 transition-colors ${isActive
										? 'border-gray-900 font-semibold'
										: 'border-transparent hover:border-gray-400'
									}`
								}
							>
								Contact Us
							</NavLink>
						</li>
					</ul>

					{/* Desktop Auth Buttons */}
					<div className="hidden lg:flex items-center gap-4">
						<Link
							to="/login"
							className="text-gray-700 hover: text-gray-900 font-medium transition-colors"
						>
							Log in
						</Link>
						<Link
							to="/signup"
							className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-all shadow-sm"
						>
							Sign Up
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus: ring-inset focus:ring-purple-500"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<HiX className="h-6 w-6" />
						) : (
							<HiMenu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4 pb-4">
						<ul className="flex flex-col space-y-4">
							<li>
								<NavLink
									to="/"
									end
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/photos"
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									Photos
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/magazines"
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									Magazines
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/blog"
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									Blogs
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about-us"
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									About Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact-us"
									onClick={closeMenu}
									className={({ isActive }) =>
										`block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors ${isActive ? 'font-semibold bg-gray-100' : 'font-normal'
										}`
									}
								>
									Contact Us
								</NavLink>
							</li>
						</ul>

						{/* Mobile Auth Buttons */}
						<div className="flex flex-col space-y-3 mt-6 px-4">
							<Link
								to="/login"
								onClick={closeMenu}
								className="text-center text-gray-700 hover: text-gray-900 font-medium py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
							>
								Log in
							</Link>
							<Link
								to="/signup"
								onClick={closeMenu}
								className="text-center bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-all shadow-sm"
							>
								Sign Up
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
