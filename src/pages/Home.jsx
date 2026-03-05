import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b29] via-[#111f30] to-[#0f1b29] opacity-90"></div>
          {/* Abstract cloud/tech decoration */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF9900] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400">Cloud</span> Movement
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Join the AWS Community at I2IT. We are students building the future with cloud computing, learning together, and innovating for tomorrow.
          </p>
          <div className="flex justify-center gap-4">
            <NavLink to="/about" className="bg-[#FF9900] text-[#0f1b29] font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-[#FF9900]/20">
              Discover Our Mission
            </NavLink>
            <NavLink to="/events" className="bg-[#162638] text-white font-bold py-3 px-8 rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-300">
              Upcoming Meetups
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SectionContainer className="bg-[#0b141e]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering students with industry-relevant cloud skills and a strong network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Hands-on Labs</h3>
            <p className="text-gray-400">
              Get practical experience with real AWS services. Build projects that matter and learn by doing.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Networking</h3>
            <p className="text-gray-400">
              Connect with like-minded students, industry experts, and AWS professionals in our community.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Career Growth</h3>
            <p className="text-gray-400">
              Prepare for AWS certifications, get resume reviews, and discover internship opportunities in cloud computing.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer>
        <div className="bg-gradient-to-br from-[#162638] to-[#0f1b29] rounded-3xl p-10 md:p-16 text-center border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#FF9900] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to start your cloud journey?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Be part of a growing community of cloud enthusiasts. Enhance your skills, work on real projects, and shape your future.
          </p>
          <div className="relative z-10">
             <a href="#" className="inline-block bg-[#FF9900] text-[#0f1b29] font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-[#FF9900]/20">
               Join the Community
             </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
