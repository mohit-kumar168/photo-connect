import img1 from '../../assets/hero/img1.jpg'
import img2 from '../../assets/hero/img2.jpg'
import img3 from '../../assets/hero/img3.jpg'
import img4 from '../../assets/hero/img4.jpg'
import img5 from '../../assets/hero/img5.jpg'
import img6 from '../../assets/hero/img6.jpg'
import img7 from '../../assets/hero/img7.jpg'

const Hero = () => {
	return (
		<section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-12 sm:py-16 md:py-20 px-4">

			{/* Floating visuals */}
			<div className="hidden md:block absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-4 lg:left-10 animate-float-slow">
					<div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
						<img src={img1} alt="Photography" className="w-full h-full object-cover rounded-2xl" />
					</div>
				</div>

				<div className="absolute top-1/3 left-2 lg:left-8 animate-float-medium">
					<div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-2xl bg-white p-2">
						<img src={img2} alt="Creative" className="w-full h-full object-cover rounded-full" />
					</div>
				</div>

				<div className="absolute bottom-32 left-8 lg:left-16 animate-float-fast">
					<div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
						<img src={img3} alt="Visual story" className="w-full h-full object-cover rounded-xl" />
					</div>
				</div>

				<div className="absolute top-1/2 left-16 lg:left-32 animate-float-slow -translate-y-1/2">
					<div className="w-32 h-40 lg:w-40 lg:h-48 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
						<img src={img4} alt="Photographer" className="w-full h-full object-cover rounded-2xl" />
					</div>
				</div>

				<div className="absolute top-28 right-8 lg:right-20 animate-float-medium">
					<div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
						<img src={img5} alt="Nature" className="w-full h-full object-cover rounded-2xl" />
					</div>
				</div>

				<div className="absolute top-1/3 right-8 lg:right-16 animate-float-fast">
					<div className="w-28 h-28 lg:w-36 lg:h-36 rounded-3xl overflow-hidden shadow-2xl bg-white p-3">
						<img src={img6} alt="Gallery" className="w-full h-full object-cover rounded-2xl" />
					</div>
				</div>

				<div className="absolute bottom-1/3 right-4 lg:right-12 animate-float-slow">
					<div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-2xl bg-white p-2">
						<img src={img7} alt="Urban" className="w-full h-full object-cover rounded-full" />
					</div>
				</div>

				<div className="absolute bottom-28 right-12 lg:right-24 animate-float-medium">
					<div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
						<img src={img1} alt="Visuals" className="w-full h-full object-cover rounded-2xl" />
					</div>
				</div>
			</div>

			{/* Hero content */}
			<div className="relative z-10 max-w-4xl mx-auto text-center pt-12 sm:pt-16 md:pt-20">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
					Connect Through
					<br />
					<span className="text-gray-800">Photography & Visual Stories</span>
				</h1>

				<p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
					Discover photographers, explore powerful visuals, and share stories
					that connect creators and audiences worldwide.
				</p>

				{/* Category pills */}
				<div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Photography
					</span>
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Visual Art
					</span>
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Storytelling
					</span>
				</div>

				<div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Creators
					</span>
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Galleries
					</span>
					<span className="bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md text-sm sm:text-base text-gray-800 font-medium">
						Collections
					</span>
				</div>
			</div>

			{/* Supporting text */}
			<div className="relative z-10 text-center mt-16 sm:mt-24 md:mt-32 px-4">
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-2">
					Photographers
				</h2>
				<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300">
					Visual Creators
				</p>
			</div>
		</section>
	)
}

export default Hero

