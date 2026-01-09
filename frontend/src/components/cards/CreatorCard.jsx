import { HiHeart, HiOutlineHeart } from "react-icons/hi"
import { HiCheckBadge } from "react-icons/hi2"
import { useState } from "react"

const CreatorCard = () => {
	const [likedCards, setLikedCards] = useState({});
	const [followingCards, setFollowingCards] = useState({});

	const profiles = [
		{
			id: 1,
			name: "Sophie Bennett",
			title: "Product Designer who focuses on simplicity & usability.",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
			followers: 312,
			posts: 48,
			verified: true,
			isFollowing: false,
			theme: "light"
		},
		{
			id: 2,
			name: "Alex Martinez",
			title: "UI/UX Designer crafting beautiful digital experiences.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
			followers: 425,
			posts: 67,
			verified: true,
			isFollowing: false,
			theme: "dark"
		},
		{
			id: 3,
			name: "Emma Thompson",
			title: "Creative Director passionate about innovative design solutions.",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
			followers: 589,
			posts: 92,
			verified: true,
			isFollowing: true,
			theme: "light"
		},
		{
			id: 4,
			name: "James Wilson",
			title: "Brand Designer specializing in modern visual identities.",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e? w=400&q=80",
			followers: 756,
			posts: 134,
			verified: true,
			isFollowing: false,
			theme: "dark"
		}
	];

	const toggleLike = (id) => {
		setLikedCards(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	const toggleFollow = (id) => {
		setFollowingCards(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	return (
		<div className="min-h-screen py-12 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-800 mb-2">Featured Creators</h1>
					<p className="text-gray-600">Discover talented designers and creators</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{profiles.map((profile) => (
						<div
							key={profile.id}
							className={`rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${profile.theme === 'dark'
								? 'bg-gray-900'
								: 'bg-white'
								}`}
						>
							{/* Card Content */}
							<div className="relative">
								{/* Profile Image */}
								<div className="relative h-64 rounded-2xl overflow-hidden mb-4">
									<img
										src={profile.image}
										alt={profile.name}
										className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-all duration-700"
									/>

									{/* Like Button - Top Right */}
									<button
										onClick={() => toggleLike(profile.id)}
										className={`absolute top-3 right-3 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center hover: scale-110 transition-all duration-300 shadow-lg z-10 ${profile.theme === 'dark'
											? 'bg-white/20 hover:bg-white/30'
											: 'bg-white/90 hover:bg-white'
											}`}
									>
										{likedCards[profile.id] ? (
											<HiHeart className="w-5 h-5 text-red-500" />
										) : (
											<HiOutlineHeart className={`w-5 h-5 ${profile.theme === 'dark' ? 'text-white' : 'text-gray-700'
												}`} />
										)}
									</button>
								</div>

								{/* Profile Info */}
								<div className="px-2">
									{/* Name and Verified Badge */}
									<div className="flex items-center gap-2 mb-2">
										<h2 className={`text-xl font-bold ${profile.theme === 'dark' ? 'text-white' : 'text-gray-900'
											}`}>
											{profile.name}
										</h2>
										{profile.verified && (
											<HiCheckBadge className="w-5 h-5 text-blue-500" />
										)}
									</div>

									{/* Title/Bio */}
									<p className={`text-sm mb-4 line-clamp-2 ${profile.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
										}`}>
										{profile.title}
									</p>

									{/* Stats - Followers and Posts */}
									<div className={`flex items-center justify-around mb-4 py-3 rounded-xl ${profile.theme === 'dark'
										? 'bg-gray-800'
										: 'bg-gray-50'
										}`}>
										<div className="text-center">
											<p className={`text-lg font-bold ${profile.theme === 'dark' ? 'text-white' : 'text-gray-900'
												}`}>
												{profile.followers}
											</p>
											<p className={`text-xs ${profile.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
												}`}>
												Followers
											</p>
										</div>
										<div className={`w-px h-10 ${profile.theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
											}`}></div>
										<div className="text-center">
											<p className={`text-lg font-bold ${profile.theme === 'dark' ? 'text-white' : 'text-gray-900'
												}`}>
												{profile.posts}
											</p>
											<p className={`text-xs ${profile.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
												}`}>
												Posts
											</p>
										</div>
									</div>

									{/* Follow Button */}
									<button
										onClick={() => toggleFollow(profile.id)}
										className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 ${(followingCards[profile.id] !== undefined ? followingCards[profile.id] : profile.isFollowing)
											? profile.theme === 'dark'
												? 'bg-gray-800 text-gray-300 hover:bg-gray-750 border border-gray-700'
												: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
											: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover: from-blue-700 hover: to-blue-800'
											}`}
									>
										{(followingCards[profile.id] !== undefined ? followingCards[profile.id] : profile.isFollowing)
											? 'Following'
											: 'Follow'}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CreatorCard
