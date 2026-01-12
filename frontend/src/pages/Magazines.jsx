import FilterSection from '../components/common/FilterSection'
import MagazineCard from '../components/cards/MagazineCard'

const Magazines = () => {
	// Sample data - replace with API call
	const magazinesData = [
		{
			id: 1,
			title: 'Photography Weekly - Winter Edition',
			cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
			description: 'Explore the latest trends in modern photography and visual storytelling.  Features exclusive interviews with award-winning photographers.',
			issue: 'Issue #45',
			publishDate: 'Jan 2026',
			pages: 120,
			isFree: false,
			category: 'Photography'
		},
		{
			id: 2,
			title: 'Creative Arts Monthly',
			cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600',
			description: 'Discover inspiring artworks from emerging and established artists worldwide.  A journey through contemporary visual culture.',
			issue: 'Vol 12',
			publishDate: 'Dec 2025',
			pages: 95,
			isFree: true,
			category: 'Art'
		},
		{
			id: 3,
			title: 'Digital Artist Pro',
			cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600',
			description: 'Master digital illustration, 3D art, and graphic design. Tutorials, tips, and inspiration for modern creators.',
			issue: 'Q1 2026',
			publishDate: 'Jan 2026',
			pages: 140,
			isFree: false,
			category: 'Digital Art'
		},
		{
			id: 4,
			title: 'Travel Photography Guide',
			cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600',
			description: 'Capture the world through your lens.  Expert advice on travel photography from stunning destinations.',
			issue: 'Spring 2026',
			publishDate: 'Jan 2026',
			pages: 108,
			isFree: true,
			category: 'Travel'
		},
		{
			id: 5,
			title: 'Portrait Masters Quarterly',
			cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600',
			description: 'The definitive guide to portrait photography.  Lighting techniques, posing tips, and post-processing workflows.',
			issue: 'Issue #28',
			publishDate: 'Dec 2025',
			pages: 132,
			isFree: false,
			category: 'Photography'
		},
		{
			id: 6,
			title: 'Urban Visuals',
			cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
			description: 'Street photography and urban exploration. Showcasing the beauty of city life through compelling imagery.',
			issue: 'Vol 8',
			publishDate: 'Jan 2026',
			pages: 88,
			isFree: true,
			category: 'Urban'
		},
		{
			id: 7,
			title: 'Nature & Wildlife',
			cover: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600',
			description: 'Stunning wildlife photography and conservation stories. Connect with nature through breathtaking images.',
			issue: 'Issue #52',
			publishDate: 'Dec 2025',
			pages: 115,
			isFree: false,
			category: 'Nature'
		},
		{
			id: 8,
			title: 'Fashion Photography Today',
			cover: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
			description: 'The latest in fashion photography, styling, and editorial work. Industry insights and creative inspiration.',
			issue: 'Winter 2026',
			publishDate: 'Jan 2026',
			pages: 156,
			isFree: false,
			category: 'Fashion'
		},
		{
			id: 9,
			title: 'Minimalist Design',
			cover: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=600',
			description: 'Less is more.  Explore the art of minimalist photography and design principles that make powerful statements.',
			issue: 'Vol 5',
			publishDate: 'Jan 2026',
			pages: 76,
			isFree: true,
			category: 'Design'
		},
		{
			id: 10,
			title: 'Drone Photography Essentials',
			cover: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600',
			description: 'Aerial perspectives and drone photography techniques. See the world from above with expert guidance.',
			issue: 'Issue #15',
			publishDate: 'Dec 2025',
			pages: 102,
			isFree: false,
			category: 'Technology'
		},
		{
			id: 11,
			title: 'Black & White Masterclass',
			cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
			description: 'The timeless art of monochrome photography. Learn composition, contrast, and emotional storytelling.',
			issue: 'Issue #33',
			publishDate: 'Jan 2026',
			pages: 124,
			isFree: true,
			category: 'Photography'
		},
		{
			id: 12,
			title: 'Commercial Photography Business',
			cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600',
			description: 'Build your photography business.  Marketing strategies, client management, and pricing guides for professionals.',
			issue: 'Q1 2026',
			publishDate: 'Jan 2026',
			pages: 98,
			isFree: false,
			category: 'Business'
		}
	]
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="pt-16">
				<FilterSection type="magazines" />
				<MagazineCard magazinesData={magazinesData} />
			</div>
		</div>
	)
}

export default Magazines
