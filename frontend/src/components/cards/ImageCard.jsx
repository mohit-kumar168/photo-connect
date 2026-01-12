import { useState } from 'react'
import { HiHeart, HiDownload, HiEye, HiOutlineHeart } from 'react-icons/hi'

const ImageCard = ({ imagesData }) => {
	const [likedImages, setLikedImages] = useState([])

	const toggleLike = (id) => {
		setLikedImages(prev =>
			prev.includes(id) ? prev.filter(imgId => imgId !== id) : [...prev, id]
		)
	}

	return (
		<div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Images</h1>
				<p className="text-sm text-gray-600">{imagesData.length} images</p>
			</div>

			{/* Responsive Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
				{imagesData.map((image) => (
					<div
						key={image.id}
						className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
					>
						{/* Image Section */}
						<div className="relative h-48 sm:h-56 lg:h-64 bg-gray-200 overflow-hidden">
							<img
								src={image.image}
								alt={image.title}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>

							{/* Overlay Actions */}
							<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
								<button
									onClick={() => toggleLike(image.id)}
									className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
									aria-label="Like image"
								>
									{likedImages.includes(image.id) ? (
										<HiHeart className="text-red-500 text-xl" />
									) : (
										<HiOutlineHeart className="text-gray-700 text-xl" />
									)}
								</button>
								<button
									className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
									aria-label="Download image"
								>
									<HiDownload className="text-gray-700 text-xl" />
								</button>
							</div>

							{/* View Count Badge */}
							<div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs">
								<HiEye />
								<span>{image.views || '1.2k'}</span>
							</div>

							{/* Premium Badge (if applicable) */}
							{image.isPremium && (
								<div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
									Premium
								</div>
							)}
						</div>

						{/* Content Section */}
						<div className="p-4">
							<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
								{image.title}
							</h3>

							<div className="flex items-center justify-between text-sm text-gray-600 mb-3">
								<span>{image.size}</span>
								<span className="text-xs bg-gray-100 px-2 py-1 rounded">
									{image.dimensions || '1920×1080'}
								</span>
							</div>

							{/* Author Info */}
							<div className="flex items-center gap-2 pt-3 border-t border-gray-100">
								<div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white text-sm font-semibold">
									{image.author ? image.author[0] : 'A'}
								</div>
								<span className="text-sm text-gray-700 font-medium">
									{image.author || 'Anonymous'}
								</span>
							</div>

							{/* Tags */}
							{image.tags && image.tags.length > 0 && (
								<div className="flex flex-wrap gap-1 mt-3">
									{image.tags.slice(0, 2).map((tag, index) => (
										<span
											key={index}
											className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
										>
											#{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Load More Button */}
			<div className="text-center mt-12">
				<button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all shadow-md hover:shadow-lg">
					Load More Images
				</button>
			</div>
		</div>
	)
}

export default ImageCard
