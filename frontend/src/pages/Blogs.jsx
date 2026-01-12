import FilterSection from '../components/common/FilterSection'
import BlogCard from '../components/cards/BlogCard'

const Blogs = () => {
	// Sample data - replace with API call
	const blogsData = [
		{
			id: 1,
			title: '10 Essential Tips for Landscape Photography',
			featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
			excerpt: 'Learn the fundamental techniques that will transform your landscape photography from good to stunning.  Discover composition rules, lighting secrets, and post-processing tips.',
			category: 'Tutorial',
			author: 'Sarah Johnson',
			publishDate: '2 days ago',
			readTime: '8 min'
		},
		{
			id: 2,
			title: 'Behind the Lens:  Interview with Award-Winning Photographer',
			featuredImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
			excerpt: 'An exclusive conversation about creative process, overcoming challenges, and the future of photography with renowned photographer Marcus Chen.',
			category: 'Interview',
			author: 'Michael Chen',
			publishDate: '5 days ago',
			readTime: '12 min'
		},
		{
			id: 3,
			title: 'Complete Guide to Portrait Lighting Techniques',
			featuredImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800',
			excerpt: 'Master the art of portrait lighting with our comprehensive guide covering natural light, studio setups, and creative lighting patterns.',
			category: 'Tutorial',
			author: 'Emma Rodriguez',
			publishDate: '1 week ago',
			readTime: '15 min'
		},
		{
			id: 4,
			title: 'The Rise of Smartphone Photography in 2026',
			featuredImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
			excerpt: 'How mobile photography is changing the industry. Explore the latest trends, apps, and techniques that professionals are using.',
			category: 'Industry News',
			author: 'David Kim',
			publishDate: '3 days ago',
			readTime: '6 min'
		},
		{
			id: 5,
			title: 'Creating Mood with Color Grading',
			featuredImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
			excerpt: 'Transform your images with professional color grading techniques.  Learn how to create emotional impact through color theory.',
			category: 'Post-Processing',
			author: 'Lisa Anderson',
			publishDate: '4 days ago',
			readTime: '10 min'
		},
		{
			id: 6,
			title: 'Street Photography Ethics:  A Modern Perspective',
			featuredImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
			excerpt: 'Navigate the complex ethical considerations of street photography in the digital age. Privacy, consent, and artistic freedom.',
			category: 'Opinion',
			author: 'James Wilson',
			publishDate: '6 days ago',
			readTime: '9 min'
		},
		{
			id: 7,
			title: 'Beginner\'s Guide to Manual Mode',
			featuredImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
			excerpt: 'Stop using auto mode!  Understand aperture, shutter speed, and ISO to take full control of your camera and creative vision.',
			category: 'Tutorial',
			author: 'Rachel Green',
			publishDate: '1 week ago',
			readTime: '11 min'
		},
		{
			id: 8,
			title: 'Top 15 Photography Locations in Europe',
			featuredImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
			excerpt: 'Discover breathtaking locations across Europe that every photographer should visit. From Iceland to Greece, explore hidden gems.',
			category: 'Travel',
			author: 'Marco Rossi',
			publishDate: '2 weeks ago',
			readTime: '13 min'
		},
		{
			id: 9,
			title: 'Monetizing Your Photography:  Beyond Stock Photos',
			featuredImage: 'https://images.unsplash.com/photo-1554224311-beee0c973c2e?w=800',
			excerpt: 'Explore diverse income streams for photographers including workshops, prints, licensing, and brand partnerships.',
			category: 'Business',
			author: 'Alex Thompson',
			publishDate: '3 days ago',
			readTime: '14 min'
		},
		{
			id: 10,
			title: 'The Art of Long Exposure Photography',
			featuredImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800',
			excerpt: 'Create dreamy, ethereal images with long exposure techniques. Equipment, settings, and creative ideas for stunning results.',
			category: 'Tutorial',
			author: 'Sophie Martin',
			publishDate: '5 days ago',
			readTime: '10 min'
		},
		{
			id: 11,
			title: 'Wildlife Photography:  Patience and Preparation',
			featuredImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
			excerpt: 'Learn from wildlife photographer Karen White about the dedication required to capture nature\'s most elusive moments.',
			category: 'Case Study',
			author: 'Karen White',
			publishDate: '1 week ago',
			readTime: '16 min'
		},
		{
			id: 12,
			title: 'Mastering Composition: Rule of Thirds and Beyond',
			featuredImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
			excerpt: 'Go beyond basic composition rules to create visually compelling images that tell powerful stories and capture attention.',
			category: 'Tutorial',
			author: 'Daniel Park',
			publishDate: '4 days ago',
			readTime: '12 min'
		},
		{
			id: 13,
			title: 'Drone Photography Regulations 2026: What You Need to Know',
			featuredImage: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800',
			excerpt: 'Stay compliant with the latest drone photography laws and regulations. Essential information for aerial photographers.',
			category: 'Industry News',
			author: 'Tom Harrison',
			publishDate: '2 days ago',
			readTime: '7 min'
		},
		{
			id: 14,
			title: 'Creating Bokeh: The Art of Beautiful Blur',
			featuredImage: 'https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800',
			excerpt: 'Understand the science and art behind bokeh.  Lens selection, aperture settings, and creative techniques explained.',
			category: 'Tutorial',
			author: 'Nina Patel',
			publishDate: '6 days ago',
			readTime: '9 min'
		},
		{
			id: 15,
			title: 'Sustainable Photography: Minimizing Your Environmental Impact',
			featuredImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
			excerpt: 'How to practice photography responsibly.  Tips for eco-friendly shooting, travel, and equipment choices.',
			category: 'Opinion',
			author: 'Green Lens',
			publishDate: '1 week ago',
			readTime: '8 min'
		},
		{
			id: 16,
			title: 'Product Photography Setup on a Budget',
			featuredImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
			excerpt: 'Create professional product photos without breaking the bank. DIY lighting, backdrops, and editing techniques.',
			category: 'Tutorial',
			author: 'Chris Baker',
			publishDate: '3 days ago',
			readTime: '11 min'
		}
	]
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="pt-16">
				<FilterSection type="blogs" />
				<BlogCard blogsData={blogsData} />
			</div>
		</div>
	)
}

export default Blogs
