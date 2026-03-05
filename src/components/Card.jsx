export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#162638] rounded-2xl p-6 md:p-8 shadow-lg border border-gray-800 hover:border-gray-700 transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}
