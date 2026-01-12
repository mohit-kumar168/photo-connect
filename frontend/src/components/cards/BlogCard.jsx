import { HiBookmark, HiOutlineBookmark, HiClock, HiUser } from 'react-icons/hi'
import { useState } from 'react'

const BlogCard = ({ blogsData }) => {
	const [bookmarked, setBookmarked] = useState([])

	const toggleBookmark = (id) => {
		setBookmarked(prev =>
			prev.includes(id) ? prev.filter(blogId => blogId !== id) : [...prev, id]
		)
	}

	return (
		<div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Blog Articles</h1>
				<p className="text-sm text-gray-600">{blogsData.length} articles</p>
			</div>

			{/* Responsive Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{blogsData.map((blog) => (
					<article
						key={blog.id}
						className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
					>
						{/* Featured Image */}
						<div className="relative h-48 sm: h-56 bg-gray-200 overflow-hidden">
							<img
								src={blog.featuredImage}
								alt={blog.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>

							{/* Bookmark Button */}
							<button
								onClick={() => toggleBookmark(blog.id)}
								className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
							>
								{bookmarked.includes(blog.id) ? (
									<HiBookmark className="text-purple-600 text-lg" />
								) : (
									<HiOutlineBookmark className="text-gray-700 text-lg" />
								)}
							</button>

							{/* Category Badge */}
							<div className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
								{blog.category || 'Photography'}
							</div>
						</div>

						{/* Content */}
						<div className="p-5">
							<h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
								{blog.title}
							</h2>

							<p className="text-sm text-gray-600 mb-4 line-clamp-3">
								{blog.excerpt}
							</p>

							{/* Meta Info */}
							<div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
								<div className="flex items-center gap-1">
									<HiClock />
									<span>{blog.publishDate || '3 days ago'}</span>
								</div>
								<span>{blog.readTime || '5 min'} read</span>
							</div>

							{/* Author & Read More */}
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs font-semibold">
										{blog.author ? blog.author[0] : 'A'}
									</div>
									<span className="text-sm text-gray-700 font-medium">
										{blog.author || 'Anonymous'}
									</span>
								</div>

								<button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
									Read More →
								</button>
							</div>
						</div>
					</article>
				))}
			</div>

			{/* Load More */}
			<div className="text-center mt-12">
				<button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all shadow-md">
					Load More Articles
				</button>
			</div>
		</div>
	)
}

export default BlogCard
