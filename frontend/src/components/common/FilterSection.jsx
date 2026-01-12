import { useState } from 'react'
import { HiSearch, HiX } from 'react-icons/hi'

const FilterSection = ({ type = 'images' }) => {
	const [activeCategory, setActiveCategory] = useState('All')
	const [activeTags, setActiveTags] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	// Different filters for different content types
	const filterConfig = {
		images: {
			categories: ['All', 'Nature', 'Urban', 'People', 'Abstract', 'Animals', 'Food', 'Technology'],
			tags: ['Landscape', 'Portrait', 'Black & White', 'Aerial', 'Macro', 'Street', 'Minimalist', 'Vintage'],
			placeholder: 'Search images...'
		},
		creativeArt: {
			categories: ['All', 'Digital Art', 'Illustration', 'Painting', '3D Art', 'Typography', 'Vector', 'Mixed Media'],
			tags: ['Abstract', 'Realistic', 'Cartoon', 'Fantasy', 'Surreal', 'Modern', 'Classic', 'Experimental'],
			placeholder: 'Search creative art...'
		},
		magazines: {
			categories: ['All', 'Fashion', 'Travel', 'Technology', 'Lifestyle', 'Business', 'Health', 'Culture'],
			tags: ['Latest Issue', 'Featured', 'Popular', 'Premium', 'Free'],
			placeholder: 'Search magazines...'
		},
		blogs: {
			categories: ['All', 'Photography Tips', 'Tutorials', 'Industry News', 'Inspiration', 'Behind the Scenes', 'Reviews'],
			tags: ['Beginner', 'Advanced', 'How-to', 'Case Study', 'Interview', 'Opinion'],
			placeholder: 'Search blogs...'
		}
	}

	const config = filterConfig[type]

	const toggleTag = (tag) => {
		setActiveTags(prev =>
			prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
		)
	}

	const clearFilters = () => {
		setActiveCategory('All')
		setActiveTags([])
		setSearchQuery('')
	}

	const hasActiveFilters = activeCategory !== 'All' || activeTags.length > 0 || searchQuery

	return (
		<section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 py-6">
				{/* Search Bar */}
				<div className="mb-6">
					<div className="relative max-w-2xl mx-auto">
						<HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
						<input
							type="text"
							placeholder={config.placeholder}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						{searchQuery && (
							<button
								onClick={() => setSearchQuery('')}
								className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
							>
								<HiX className="text-xl" />
							</button>
						)}
					</div>
				</div>

				{/* Categories */}
				<div className="mb-4">
					<h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
					<div className="flex flex-wrap gap-2">
						{config.categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
										? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Tags */}
				<div className="mb-4">
					<h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
					<div className="flex flex-wrap gap-2">
						{config.tags.map((tag) => (
							<button
								key={tag}
								onClick={() => toggleTag(tag)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTags.includes(tag)
										? 'bg-gray-900 text-white'
										: 'bg-white text-gray-600 border border-gray-300 hover: border-gray-400'
									}`}
							>
								{tag}
							</button>
						))}
					</div>
				</div>

				{/* Active Filters & Clear Button */}
				{hasActiveFilters && (
					<div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200">
						<span className="text-sm text-gray-600 font-medium">Active: </span>
						{activeCategory !== 'All' && (
							<span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
								{activeCategory}
							</span>
						)}
						{activeTags.map((tag) => (
							<span
								key={tag}
								className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
							>
								{tag}
								<button onClick={() => toggleTag(tag)} className="hover:text-gray-900">
									<HiX className="text-sm" />
								</button>
							</span>
						))}
						{searchQuery && (
							<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
								"{searchQuery}"
							</span>
						)}
						<button
							onClick={clearFilters}
							className="ml-auto text-sm text-red-600 hover:text-red-700 font-medium underline"
						>
							Clear all filters
						</button>
					</div>
				)}
			</div>
		</section>
	)
}

export default FilterSection
