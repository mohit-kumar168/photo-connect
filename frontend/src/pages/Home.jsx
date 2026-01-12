import CreatorCard from "../components/cards/CreatorCard"
import ImageCard from "../components/cards/ImageCard"
import FilterSection from "../components/common/FilterSection";
import Hero from "../components/layout/Hero";

const Home = () => {
	const imagesData = [
		{
			id: 1,
			title: 'Golden Hour Desert',
			image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
			size: '2. 4 MB',
			dimensions: '4000×3000',
			views: '12. 5k',
			author: 'Sarah Mitchell',
			isPremium: false,
			tags: ['desert', 'landscape', 'sunset']
		},
		{
			id: 2,
			title: 'Mountain Waterfall',
			image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
			size: '3.1 MB',
			dimensions: '5000×3333',
			views: '8.2k',
			author: 'John Rivers',
			isPremium: true,
			tags: ['waterfall', 'nature', 'mountains']
		},
		{
			id: 3,
			title: 'Urban Architecture',
			image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
			size: '1.8 MB',
			dimensions: '3840×2160',
			views: '15.3k',
			author: 'Emma Stone',
			isPremium: false,
			tags: ['architecture', 'urban', 'building']
		},
		{
			id: 4,
			title: 'Coffee Morning',
			image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
			size: '1.2 MB',
			dimensions: '2400×1600',
			views: '20.1k',
			author: 'Michael Brown',
			isPremium: false,
			tags: ['coffee', 'food', 'morning']
		},
		{
			id: 5,
			title: 'Ocean Waves',
			image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
			size: '2.9 MB',
			dimensions: '4500×3000',
			views: '18.7k',
			author: 'Ocean Explorer',
			isPremium: true,
			tags: ['ocean', 'waves', 'nature']
		},
		{
			id: 6,
			title: 'City Lights at Night',
			image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
			size: '2.6 MB',
			dimensions: '4200×2800',
			views: '22.4k',
			author: 'Night Photographer',
			isPremium: false,
			tags: ['city', 'night', 'lights']
		},
		{
			id: 7,
			title: 'Forest Path',
			image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
			size: '3.5 MB',
			dimensions: '5472×3648',
			views: '9.8k',
			author: 'Nature Walker',
			isPremium: true,
			tags: ['forest', 'path', 'nature']
		},
		{
			id: 8,
			title: 'Minimal Workspace',
			image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
			size: '1.5 MB',
			dimensions: '3000×2000',
			views: '16.2k',
			author: 'Workspace Design',
			isPremium: false,
			tags: ['workspace', 'minimal', 'desk']
		},
		{
			id: 9,
			title: 'Sunset Beach',
			image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
			size: '2.8 MB',
			dimensions: '4608×3072',
			views: '25.6k',
			author: 'Beach Lover',
			isPremium: false,
			tags: ['beach', 'sunset', 'ocean']
		},
		{
			id: 10,
			title: 'Misty Mountains',
			image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
			size: '3.2 MB',
			dimensions: '5184×3456',
			views: '14.3k',
			author: 'Mountain Climber',
			isPremium: true,
			tags: ['mountains', 'mist', 'landscape']
		},
		{
			id: 11,
			title: 'Autumn Leaves',
			image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
			size: '2.1 MB',
			dimensions: '3648×2736',
			views: '11.9k',
			author: 'Autumn Seeker',
			isPremium: false,
			tags: ['autumn', 'leaves', 'nature']
		},
		{
			id: 12,
			title: 'Street Photography',
			image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
			size: '2.3 MB',
			dimensions: '4000×2667',
			views: '17.5k',
			author: 'Street Artist',
			isPremium: false,
			tags: ['street', 'urban', 'city']
		},
		{
			id: 13,
			title: 'Northern Lights',
			image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800',
			size: '4.1 MB',
			dimensions: '6000×4000',
			views: '32.1k',
			author: 'Aurora Hunter',
			isPremium: true,
			tags: ['aurora', 'night', 'sky']
		},
		{
			id: 14,
			title: 'Tropical Paradise',
			image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
			size: '2.7 MB',
			dimensions: '4500×3000',
			views: '19.8k',
			author: 'Island Explorer',
			isPremium: false,
			tags: ['tropical', 'beach', 'paradise']
		},
		{
			id: 15,
			title: 'Modern Architecture',
			image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800',
			size: '1.9 MB',
			dimensions: '3500×2333',
			views: '13.4k',
			author: 'Architect View',
			isPremium: true,
			tags: ['architecture', 'modern', 'building']
		},
		{
			id: 16,
			title: 'Winter Wonderland',
			image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
			size: '3.3 MB',
			dimensions: '5120×3413',
			views: '21.7k',
			author: 'Winter Tales',
			isPremium: false,
			tags: ['winter', 'snow', 'landscape']
		}
	]
	return (
		<div className="bg-gradient-to-br from-gray-50 to-gray-100">
			<Hero />
			<FilterSection type="images" />
			<ImageCard imagesData={imagesData} />
			<CreatorCard />

		</div>
	)
}

export default Home
