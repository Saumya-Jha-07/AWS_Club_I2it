import React, { useRef, useState } from 'react';

export default function EventCard({ event }) {
  const {
    title,
    date,
    time,
    location,
    description,
    image,
    tags,
    isUpcoming,
    registrationLink,
  } = event;

  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Milder tilt for large horizontal event cards
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTransformStyle(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
  };

  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {
    setTransformStyle('perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={`group flex flex-col md:flex-row glass-panel rounded-3xl overflow-hidden border ${isUpcoming ? "border-[#FF9900]/50" : "border-white/10"} hover:border-[#FF9900]/60 transition-all duration-200 ease-out shadow-2xl relative`}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20 mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 153, 0, 0.15), transparent 40%)`
        }}
      />

      {isUpcoming && (
        <div className="absolute top-4 right-4 z-10 bg-[#FF9900] text-[#0f1b29] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Upcoming
        </div>
      )}

      <div className="md:w-1/3 min-h-[200px] md:min-h-full shrink-0 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill absolute inset-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#162638] via-transparent to-transparent opacity-80 md:opacity-100"></div>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-black/30 backdrop-blur-md text-[#FF9900] text-xs font-semibold px-2.5 py-1 rounded border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4 pt-4 border-t border-gray-700">
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-300">
              <svg
                className="w-4 h-4 mr-2 text-[#FF9900]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {date} at {time}
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </div>
          </div>

          <button
            className={`shrink-0 font-bold py-2 px-6 rounded-full transition-colors duration-300 ${isUpcoming ? "bg-white text-[#0f1b29] hover:bg-gray-200" : "bg-black/40 backdrop-blur-md text-white border border-white/20 hover:border-white/40"}`}
            onClick={
              isUpcoming ? () => window.open(registrationLink, "_blank") : null
            }
          >
            {isUpcoming ? "Register Now" : "View Recap"}
          </button>
        </div>
      </div>
    </div>
  );
}
