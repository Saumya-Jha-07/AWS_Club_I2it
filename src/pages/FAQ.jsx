import SectionContainer from '../components/SectionContainer';
import FAQAccordion from '../components/FAQAccordion';

const faqs = [
  {
    question: "What is the AWS Community I2IT?",
    answer: "We are a student-led technical community focused on cloud computing, specifically Amazon Web Services. Our goal is to spread awareness, provide hands-on experience, and build a strong network of cloud enthusiasts at our college."
  },
  {
    question: "Do I need prior cloud experience to join?",
    answer: "Absolutely not! We welcome students of all skill levels, from complete beginners to advanced practitioners. Our workshops and study groups are designed to help you start from scratch and build your way up."
  },
  {
    question: "How can I become a member?",
    answer: "You can officially register during our recruitment drives at the beginning of the semester. However, most of our general meetups, online discussions, and basic workshops are open to all students year-round."
  },
  {
    question: "Are there any membership fees?",
    answer: "No, joining the community and attending most of our standard training sessions are completely free. Sometimes we might host special events or hackathons that may have a minimal registration fee to cover logistics."
  },
  {
    question: "How can this help my career?",
    answer: "Cloud computing is one of the most in-demand skills in the tech industry today. By joining, you'll gain practical experience, prepare for industry-recognized AWS Certifications, build resume-worthy projects, and network with professionals who can help land internships and jobs."
  },
  {
    question: "Can non-CS/IT students join?",
    answer: "Yes! Cloud technology is applicable across many domains. Whether you're in electronics, mechanical, or business, if you have an interest in technology and want to learn, you are welcome here."
  }
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 bg-[#0f1b29] text-center overflow-hidden">
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#FF9900] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Technical <span className="text-[#FF9900]">Queries</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Everything you need to know about joining and succeeding in the AWS Community.
          </p>
        </div>
      </section>

      <SectionContainer className="bg-[#0b141e] flex-grow">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQAccordion 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpenByDefault={index === 0}
            />
          ))}
          
          <div className="mt-12 text-center p-8 bg-[#162638] rounded-2xl border border-gray-800 shadow-xl">
             <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
             <p className="text-gray-400 mb-6">Can't find the answer you're looking for? Reach out to our team directly.</p>
             <a href="mailto:contact@awsclub.i2it.ac.in" className="inline-flex items-center gap-2 bg-[#FF9900] text-[#0f1b29] font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               Contact Support
             </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
