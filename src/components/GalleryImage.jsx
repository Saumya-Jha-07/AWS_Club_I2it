export default function GalleryImage({ src, alt, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-[#162638] border border-gray-800 shadow-md ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b29] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-medium text-sm line-clamp-2">{alt}</p>
      </div>
    </div>
  );
}
