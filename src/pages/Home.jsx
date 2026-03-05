import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import ParticleCloudShape from '../components/ParticleCloudShape';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isFirstLoad] = useState(() => !sessionStorage.getItem('cloudBootAnimationRun'));
  
  useEffect(() => {
    if (isFirstLoad) {
      sessionStorage.setItem('cloudBootAnimationRun', 'true');
    }
  }, [isFirstLoad]);

  const delayOffset = isFirstLoad ? 1.5 : 0;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="block opacity-0 animate-blur-reveal" style={{ animationDelay: `${delayOffset + 0.1}s` }}>
                  Powering the Future
                </span>
                <span className="block opacity-0 animate-blur-reveal mt-2" style={{ animationDelay: `${delayOffset + 0.3}s` }}>
                  with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400 drop-shadow-[0_0_20px_rgba(255,153,0,0.3)]">Cloud</span> at I2IT
                </span>
              </h1>
              <p 
                className="max-w-lg mx-auto lg:mx-0 text-lg md:text-xl text-gray-200 mb-8 leading-relaxed opacity-0 animate-fade-in-up" 
                style={{ animationDelay: `${delayOffset + 0.9}s` }}
              >
                Be part of the founding AWS Community at I2IT. Join a student-led initiative to explore cloud computing, experiment with AWS technologies, and build the future together.
              </p>
            </div>

            {/* Right Column: 3D Particle Cloud */}
            <div className="hidden lg:flex justify-center items-center relative z-10 w-full h-full min-h-[500px]">
              <ParticleCloudShape />
            </div>
          </div>
        </div>
      </section>


      {/* Community Introduction Section */}
      <SectionContainer className="relative z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-10 rounded-3xl border-y border-blue-500/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Welcome to the AWS Cloud Club</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            The AWS Cloud Club at I2IT is a dedicated space for students to dive deep into the world of cloud computing. 
            Started with the vision of bridging the gap between academia and industry, we provide a platform where you can learn, 
            experiment with cutting-edge AWS technologies, and collaborate on real-world projects that matter.
          </p>
        </div>
      </SectionContainer>

      {/* What We Do Section */}
      <SectionContainer className="relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We foster a culture of learning by doing through diverse technical activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Workshops & Labs</h3>
            <p className="text-gray-400">
              Hands-on workshops and cloud labs where you can experiment with core AWS services and architectural patterns.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Technical Talks</h3>
            <p className="text-gray-400">
              Deep dives into cloud computing concepts, security, and scalability from experienced peers and guest speakers.
            </p>
          </Card>

          <Card className="text-center group">
            <div className="w-16 h-16 mx-auto bg-[#1a2e44] rounded-2xl flex items-center justify-center mb-6 text-[#FF9900] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Hackathons</h3>
            <p className="text-gray-400">
              Collaborative building sessions where students work on real-world problems and innovative solutions.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Community Impact Section */}
      <SectionContainer className="relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our community empowers students to grow, collaborate, and lead in the cloud era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Card className="md:col-span-7 lg:col-span-8 hover:border-[#FF9900]/30 transition-colors duration-300 min-h-[220px] flex flex-col justify-end bg-gradient-to-br from-[#162638]/50 to-[#FF9900]/5">
            <h3 className="text-2xl font-bold mb-3 text-white">Practical Skills</h3>
            <p className="text-gray-400 text-lg">Master industry-standard AWS technologies and architectural best practices.</p>
          </Card>
          <Card className="md:col-span-5 lg:col-span-4 hover:border-blue-500/30 transition-colors duration-300 min-h-[220px] flex flex-col justify-end bg-gradient-to-bl from-[#162638]/50 to-blue-500/5">
            <h3 className="text-xl font-bold mb-3 text-white">Collaboration</h3>
            <p className="text-gray-400">Work together on technical projects and build your professional portfolio.</p>
          </Card>
          <Card className="md:col-span-5 lg:col-span-4 hover:border-purple-500/30 transition-colors duration-300 min-h-[220px] flex flex-col justify-end bg-gradient-to-tr from-[#162638]/50 to-purple-500/5">
            <h3 className="text-xl font-bold mb-3 text-white">Career Paths</h3>
            <p className="text-gray-400">Explore cloud career paths and discover global opportunities in tech.</p>
          </Card>
          <Card className="md:col-span-7 lg:col-span-8 hover:border-emerald-500/30 transition-colors duration-300 min-h-[220px] flex flex-col justify-end bg-gradient-to-tl from-[#162638]/50 to-emerald-500/5">
            <h3 className="text-2xl font-bold mb-3 text-white">Ecosystem</h3>
            <p className="text-gray-400 text-lg">Connect with a growing global cloud ecosystem of experts and peers.</p>
          </Card>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer>
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#FF9900] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Shape the Future of Cloud at I2IT</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
            Become a founding member of the AWS Cloud Club. Join us in building a vibrant cloud culture and prepare for the careers of tomorrow.
          </p>
          <div className="relative z-10">
             <a href="#" className="inline-block bg-[#FF9900] text-[#0f1b29] font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-[#FF9900]/20">
               Join the Founding Community
             </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
