import SectionContainer from "../components/SectionContainer";
import FAQAccordion from "../components/FAQAccordion";

const faqs = [
  {
    question: "Who can join the community?",
    answer: "The AWS Community is open to all students, regardless of their branch or year, who have a passion for learning about cloud technologies and AWS."
  },
  {
    question: "Do I need prior cloud experience to join?",
    answer:
      "No. Beginners are welcome. The club organizes beginner-friendly sessions that start from the basics of cloud computing and gradually move toward advanced topics.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can officially register during our recruitment drives at the beginning of the semester. However, most of our general meetups, online discussions, and basic workshops are open to all students year-round.",
  },
  {
    question: "How can this help my career?",
    answer:
      "Cloud computing is one of the most in-demand skills in the tech industry today. By joining, you'll gain practical experience, prepare for industry-recognized AWS Certifications, build resume-worthy projects, and network with professionals who can help land internships and jobs.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 text-center overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-10 rounded-3xl mx-auto inline-block border-t border-blue-500/20">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Technical <span className="text-[#FF9900]">Queries</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
              Everything you need to know about joining and succeeding in the AWS
              Community.
            </p>
          </div>
        </div>
      </section>

      <SectionContainer className="relative z-10 flex-grow">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpenByDefault={index === 0}
            />
          ))}

          <div className="mt-12 text-center p-8 glass-panel rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF9900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold mb-3 relative z-10">Still have questions?</h3>
            <p className="text-gray-400 mb-6 relative z-10">
              Can't find the answer you're looking for? Reach out to our team
              directly.
            </p>
            <a
              href="https://www.linkedin.com/company/awsi2it/posts/?feedView=all"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#FF9900] text-[#0f1b29] font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
