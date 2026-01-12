import { HiBookmark, HiOutlineBookmark, HiClock } from 'react-icons/hi'
import { useState } from 'react'

const MagazineCard = ({ magazinesData }) => {
	const [bookmarked, setBookmarked] = useState([])

	const toggleBookmark = (id) => {
		setBookmarked(prev =>
			prev.includes(id) ? prev.filter(magId => magId !== id) : [...prev, id]
		)
	}

	return (
		<div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Magazines</h1>
				<p className="text-sm text-gray-600">{magazinesData.length} issues</p>
			</div>

			{/* Responsive Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{magazinesData.map((magazine) => (
					<div
						key={magazine.id}
						className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
					>
						{/* Magazine Cover */}
						<div className="relative h-72 sm:h-80 bg-gray-200 overflow-hidden">
							<img
								src={magazine.cover}
								alt={magazine.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>

							{/* Bookmark Button */}
							<button
								onClick={() => toggleBookmark(magazine.id)}
								className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
							>
								{bookmarked.includes(magazine.id) ? (
									<HiBookmark className="text-purple-600 text-xl" />
								) : (
									<HiOutlineBookmark className="text-gray-700 text-xl" />
								)}
							</button>

							{/* Issue Badge */}
							<div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-semibold">
								{magazine.issue || 'Latest Issue'}
							</div>

							{/* Premium/Free Badge */}
							{magazine.isFree ? (
								<div className="absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
									Free
								</div>
							) : (
								<div className="absolute bottom-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
									Premium
								</div>
							)}
						</div>

						{/* Content */}
						<div className="p-5">
							<h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
								{magazine.title}
							</h3>

							<p className="text-sm text-gray-600 mb-4 line-clamp-2">
								{magazine.description}
							</p>

							{/* Meta Info */}
							<div className="flex items-center justify-between text-xs text-gray-500 mb-4">
								<div className="flex items-center gap-1">
									<HiClock />
									<span>{magazine.publishDate || 'Jan 2026'}</span>
								</div>
								<span>{magazine.pages || '120'} pages</span>
							</div>

							{/* Read Button */}
							<button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-lg font-medium hover:from-pink-500 hover:to-purple-500 transition-all">
								Read Now
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Load More */}
			<div className="text-center mt-12">
				<button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md">
					Load More Magazines
				</button>
			</div>
		</div>
	)
}

export default MagazineCard
