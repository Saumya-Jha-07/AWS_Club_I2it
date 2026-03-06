import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero / Intro Section */}
      <section className="relative py-20 border-b border-gray-800/30 text-center overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-10 rounded-3xl mx-auto border-t border-[#FF9900]/20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400">AWS Cloud Club</span> at I2IT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-6">
              A student-led initiative dedicated to building the cloud computing culture at I2IT.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              The AWS Community at I2IT provides a platform for students to explore AWS technologies, 
              gain hands-on experience, and connect with like-minded peers and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Mission */}
          <Card className="md:col-span-7 flex flex-col h-full border-t-4 border-t-[#FF9900]">
            <div className="mb-6 rounded-full bg-[#1a2e44] w-16 h-16 flex items-center justify-center text-[#FF9900]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="text-gray-400 text-lg leading-relaxed flex-grow space-y-4">
              <p>To introduce cloud computing to students and encourage hands-on learning through experimentation.</p>
              <p>We aim to create a collaborative technical environment that supports students interested in pursuing cloud careers.</p>
            </div>
          </Card>

          {/* Vision */}
          <Card className="md:col-span-5 flex flex-col h-full border-t-4 border-t-blue-500">
            <div className="mb-6 rounded-full bg-[#1a2e44] w-16 h-16 flex items-center justify-center text-blue-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <div className="text-gray-400 text-lg leading-relaxed flex-grow space-y-4">
              <p>To build a strong cloud learning ecosystem within I2IT that prepares students for modern cloud technologies.</p>
              <p>We envision a community that encourages innovation using AWS tools and connects students to the global cloud community.</p>
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* Connection with AWS Ecosystem */}
      <SectionContainer className="relative z-10">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass-panel p-10 rounded-3xl mx-auto border-y border-blue-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-left md:text-center">Connection with AWS Ecosystem</h2>
            <p className="text-lg text-gray-400 leading-relaxed text-left md:text-center">
              Our community actively promotes the learning of AWS technologies and encourages students 
              to explore cloud architecture, professional certifications, and modern development practices. 
              By staying connected with the broader AWS ecosystem, we ensure our members are always 
              at the forefront of cloud innovation.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Core Values / Community Culture */}
      <SectionContainer className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Culture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            The values we are building together at I2IT.
          </p>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pt-4 pb-8">
          {[
            { 
              title: 'Curiosity', 
              description: 'Always seeking to understand the "How" and "Why".',
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            },
            { 
              title: 'Experimentation', 
              description: 'Learning through hands-on building and testing.',
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            },
            { 
              title: 'Peer Learning', 
              description: 'Sharing knowledge and growing together.',
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            },
            { 
              title: 'Collaboration', 
              description: 'Working on projects that solve real problems.',
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            },
            { 
              title: 'Technical Skills', 
              description: 'Building a strong foundation in cloud engineering.',
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className={`group glass-panel flex flex-col items-center justify-start rounded-2xl p-6 text-center border border-white/5 hover:border-[#FF9900]/50 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(255,153,0,0.15)] transition-all duration-300 relative ${i % 2 !== 0 ? 'lg:top-12' : 'lg:top-0'}`}
            >
              <div className="w-16 h-16 bg-[#1a2e44] text-[#FF9900] rounded-full flex items-center justify-center mb-5 border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-[#FF9900]/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9900] transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Core Team Section */}
      <SectionContainer className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            The dedicated individuals leading the AWS Community at I2IT.
          </p>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
        </div>

        {/* Faculty Mentor - Highlighted Card */}
        <div className="flex justify-center mb-8">
           <Card className="w-full max-w-2xl text-center border-t-2 border-blue-500 bg-gradient-to-b from-[#162638]/50 to-blue-500/5 hover:border-blue-400 flex flex-col items-center">
             <h3 className="text-2xl font-bold text-white mb-2">Dr. Deepti Chaudhari</h3>
             <p className="text-blue-400 font-semibold mb-3">Faculty Mentor</p>
             <p className="text-sm text-gray-400">Department of Computer Engineering</p>
           </Card>
        </div>

        {/* Rest of the Core Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Faizan Firdousi", role: "AWS Cloud Captain" },
            { name: "Jayant Shrivastava", role: "Vice President" },
            { name: "Vedant Jadhav", role: "Operations Lead" },
            { name: "Neha Niphade", role: "Content & Communications Lead" },
            { name: "Nikhil Hire", role: "Marketing & Outreach Lead" },
            { name: "Shravan Lunawat", role: "Technical Lead" },
          ].map((member, i) => (
             <div key={i} className="glass-panel rounded-2xl p-6 text-center border border-white/5 hover:border-[#FF9900]/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,153,0,0.15)] transition-all duration-300 flex flex-col items-center">
               <div className="w-16 h-16 bg-[#1a2e44] text-[#FF9900] rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-inner">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
               <p className="text-[#FF9900] font-medium text-sm mb-2">{member.role}</p>
             </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
