const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-6 py-14">

				{/* Top section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

					{/* Brand */}
					<div>
						<h2 className="text-2xl font-bold text-white mb-4">
							PhotoConnect
						</h2>
						<p className="text-sm leading-relaxed text-gray-400">
							A platform where photographers and visual creators
							connect, showcase their work, and tell powerful stories.
						</p>
					</div>

					{/* Explore */}
					<div>
						<h3 className="text-white font-semibold mb-4">Explore</h3>
						<ul className="space-y-2 text-sm cursor-pointer [&>li:hover]:text-white">
							<li>Discover</li>
							<li>Photographers</li>
							<li>Collections</li>
							<li>Galleries</li>
						</ul>
					</div>

					{/* Community */}
					<div>
						<h3 className="text-white font-semibold mb-4">Community</h3>
						<ul className="space-y-2 text-sm cursor-pointer [&>li:hover]:text-white">
							<li>About Us</li>
							<li>Blog</li>
							<li>Careers</li>
							<li>Contact</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Stay Updated
						</h3>
						<p className="text-sm text-gray-400 mb-4">
							Get the latest stories and featured creators.
						</p>
						<div className="flex">
							<input
								type="email"
								placeholder="Your email"
								className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-sm text-white outline-none focus:ring-2 focus:ring-gray-600"
							/>
							<button className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-r-md hover:bg-gray-200 transition">
								Join
							</button>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

					{/* Copyright */}
					<p className="text-xs text-gray-500">
						© {new Date().getFullYear()} PhotoConnect. All rights reserved.
					</p>

					{/* Socials */}
					<ul className="flex gap-4 text-sm cursor-pointer [&>li:hover]:text-white">
						<li>Instagram</li>
						<li>Twitter</li>
						<li>LinkedIn</li>
					</ul>
				</div>

			</div>
		</footer>
	)
}

export default Footer

