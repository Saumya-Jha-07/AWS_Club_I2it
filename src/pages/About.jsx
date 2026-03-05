import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero / Intro Section */}
      <section className="relative py-20 bg-[#0f1b29] border-b border-gray-800 text-center overflow-hidden">
        {/* Soft abstract glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9900] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Mission and <span className="text-[#FF9900]">Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Building the next generation of cloud leaders in India.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <SectionContainer className="bg-[#0b141e]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <Card className="flex flex-col h-full border-t-4 border-t-[#FF9900]">
            <div className="mb-6 rounded-full bg-[#1a2e44] w-16 h-16 flex items-center justify-center text-[#FF9900]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed flex-grow">
              To empower students at I2IT with comprehensive, practical knowledge of AWS cloud technologies. 
              We strive to bridge the gap between academic learning and industry requirements by providing a platform 
              for hands-on experimentation, collaborative projects, and peer-to-peer mentorship.
            </p>
          </Card>

          {/* Vision */}
          <Card className="flex flex-col h-full border-t-4 border-t-blue-500">
            <div className="mb-6 rounded-full bg-[#1a2e44] w-16 h-16 flex items-center justify-center text-blue-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed flex-grow">
              To become a leading center of excellence for cloud computing education among student communities. 
              We envision a future where every student graduates with the confidence and skills to architect scalable, 
              secure, and innovative solutions on the AWS Cloud.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Core Values */}
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
          <div className="w-24 h-1 bg-[#FF9900] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Innovation', 'Collaboration', 'Inclusivity', 'Excellence'].map((value, i) => (
            <div key={i} className="bg-[#162638] rounded-xl p-6 text-center border border-gray-800 hover:border-[#FF9900] transition-colors duration-300">
              <span className="text-4xl md:text-5xl font-black text-gray-800 block mb-2 opacity-50">0{i + 1}</span>
              <h3 className="text-xl font-bold text-white">{value}</h3>
            </div>
          ))}
        </div>
      </SectionContainer>
      
      {/* Join Call to Action inside About */}
      <SectionContainer className="bg-[#162638] border-t border-gray-800">
         <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-6">Drive the movement with us</h2>
           <p className="text-gray-400 mb-8 text-lg">Whether you are a beginner or a cloud expert, there is a place for you in our community.</p>
           <button className="bg-white text-[#0f1b29] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
             Become a Member
           </button>
         </div>
      </SectionContainer>
    </div>
  );
}
