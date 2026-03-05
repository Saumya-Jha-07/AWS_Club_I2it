import SectionContainer from '../components/SectionContainer';
import GalleryImage from '../components/GalleryImage';

// Placeholder array for gallery images
const galleryData = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop', alt: 'AWS Cloud Day 2025 Keynote', title: 'Tech Talk' },
  { id: 2, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop', alt: 'Students participating in hands-on lab sessions', title: 'Hands-on Lab' },
  { id: 3, src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop', alt: 'Community networking during breaks', title: 'Networking' },
  { id: 4, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', alt: 'Our student members group photo', title: 'Group Photo' },
  { id: 5, src: 'https://images.unsplash.com/photo-1475721025592-f2de6b8e87ec?q=80&w=800&auto=format&fit=crop', alt: 'Guest speaker session on Serverless architecture', title: 'Guest Speaker' },
  { id: 6, src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop', alt: 'Hackathon winners presenting their final project', title: 'Hackathon' },
];

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <SectionContainer>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400">Moments</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            A visual timeline of our journey, events, and the amazing people who make up the AWS Community at I2IT.
          </p>
        </div>

        {/* Categories / Filters (Static for now, but UI ready) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-[#FF9900] text-[#0f1b29] font-semibold text-sm transition-colors">All</button>
          <button className="px-6 py-2 rounded-full bg-[#162638] text-gray-300 font-medium text-sm hover:text-white border border-gray-800 transition-colors hover:border-gray-600">Meetups</button>
          <button className="px-6 py-2 rounded-full bg-[#162638] text-gray-300 font-medium text-sm hover:text-white border border-gray-800 transition-colors hover:border-gray-600">Hackathons</button>
          <button className="px-6 py-2 rounded-full bg-[#162638] text-gray-300 font-medium text-sm hover:text-white border border-gray-800 transition-colors hover:border-gray-600">Workshops</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryData.map((image, index) => (
            <GalleryImage 
              key={image.id} 
              src={image.src} 
              alt={image.alt} 
              className={
                // Create a masonry-like feel with standard tailwind grid classes
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : 
                index === 3 ? 'sm:col-span-2' : ''
              } 
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
