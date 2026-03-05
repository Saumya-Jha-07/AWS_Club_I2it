import SectionContainer from '../components/SectionContainer';
import EventCard from '../components/EventCard';

const events = [
  {
    id: 1,
    title: "Intro to Serverless Architecture",
    date: "March 15, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Main Auditorium, I2IT",
    description: "Join us for a comprehensive deep dive into building scalable and cost-effective applications using AWS Lambda, API Gateway, and DynamoDB. Perfect for beginners and intermediate learners.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    tags: ["Workshop", "Beginner", "Serverless"],
    isUpcoming: true
  },
  {
    id: 2,
    title: "Cloud Security Best Practices",
    date: "April 02, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "Virtual (Zoom)",
    description: "Learn how to secure your AWS infrastructure. We will cover IAM roles, VPC configurations, security groups, and common vulnerabilities to avoid in production workloads.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    tags: ["Security", "Intermediate", "Virtual"],
    isUpcoming: true
  },
  {
    id: 3,
    title: "AWS Certification Study Group Kickoff",
    date: "February 20, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Lab Room 402",
    description: "We successfully launched our first study group batch for the AWS Certified Cloud Practitioner exam. Students formed groups and mapped out their 4-week study plan.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    tags: ["Study Group", "Certification"],
    isUpcoming: false
  }
];

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 bg-[#0f1b29] text-center border-b border-gray-800">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4">
            Upcoming <span className="text-[#FF9900]">Meetups</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Join us at our next event. Learn, build, and grow your cloud skillset alongside peers.
          </p>
        </div>
      </section>

      <SectionContainer className="bg-[#0b141e] flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event) => (
             <EventCard key={event.id} event={event} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
